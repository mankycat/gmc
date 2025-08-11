const express = require('express');
const passport = require('passport');
const { PrismaClient } = require('@prisma/client');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

// Validation schemas using Joi
const gpuCardSchema = Joi.object({
  model: Joi.string().required(),
  memoryGb: Joi.number().integer().min(0).required(),
  gpuModel: Joi.string().required(),
  purpose: Joi.string().allow('').optional(),
  notes: Joi.string().allow('').optional(),
  serverId: Joi.string().required(),
  userId: Joi.string().required()
});

const virtualMachineSchema = Joi.object({
  nameLabel: Joi.string().required(),
  vcpuCoresAssigned: Joi.number().integer().min(0).required(),
  ramGbAssigned: Joi.number().integer().min(0).required(),
  gpuResourceSlice: Joi.string().allow('').optional(),
  purpose: Joi.string().allow('').optional(),
  assignedToUserEmail: Joi.string().email().allow('').optional(),
  internalIpAddress: Joi.string().allow('').optional(),
  notes: Joi.string().allow('').optional(),
  hostServerId: Joi.string().required(),
  assignedGpuCardId: Joi.string().allow('').optional(),
  userId: Joi.string().required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

const virtualMachineService = require('./services/virtualMachineService');
const serverService = require('./services/serverService');
const userService = require('./services/userService');
const gpuCardModelController = require('./controllers/gpuCardModelController');
const gpuCardInstanceController = require('./controllers/gpuCardInstanceController');
const serverController = require('./controllers/serverController');
const cardUsageController = require('./controllers/cardUsageController');
const virtualMachineController = require('./controllers/virtualMachineController');

// Create default admin user on startup if needed
userService.createDefaultAdminUser();

// Logout endpoint to blacklist JWT tokens
app.post('/auth/logout', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(200).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    // In a real application, you would add the token to a blacklist here
    // For this example, we'll just log it
    console.log('Logging out user with token:', token);

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) { 
    console.error('Error during logout:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await prisma.user.findUnique({ where: { email: profile.emails[0].value } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: profile.emails[0].value,
          password: 'oauth', // Dummy password for OAuth users
          isAdmin: false,
          status: 'approved' // Automatically approve OAuth users
        }
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

app.get('/auth/google/login', passport.authenticate('google', { 
  scope: ['profile', 'email'] 
}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  async (req, res) => {
    try {
      const user = req.user;
      // Create or update user logic can be added here if needed
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error('Error handling Google callback:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

// Example of handling user creation on Google callback
// This can be expanded based on specific requirements

app.get('/api/servers', async (req, res) => {
  try {
    const servers = await serverService.listServers();
    res.json(servers);
  } catch (err) {
    console.error('Error fetching servers:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/servers', authenticateToken, async (req, res) => {
  console.log('Received request to create server:', req.body);
  try {
    const userId = req.user.userId;
    const newServer = await serverService.createServer({ ...req.body, userId });
    res.status(201).json(newServer);
  } catch (err) {
    console.error('Error creating server:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

app.get('/api/servers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const server = await serverService.getServer(id);
    if (!server) {
      return res.status(404).json({ message: 'Server not found' });
    }
    res.json(server);
  } catch (err) {
    console.error('Error fetching server:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.put('/api/servers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedServer = await serverService.updateServer(id, req.body);
    res.json(updatedServer);
  } catch (err) {
    console.error('Error updating server:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.delete('/api/servers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await serverService.deleteServer(id);
    res.status(204).send();
  } catch (err) {
    console.error('Error deleting server:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/servers/:serverId/assign-gpu', serverController.assignGpuToServer);
app.delete('/api/servers/:serverId/unassign-gpu/:gpuInstanceId', serverController.unassignGpuFromServer);

app.get('/api/admin/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/admin/users', async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/admin/users', async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/admin/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await userService.updateUser(id, req.body);
    res.json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: err.message });
  }
});

app.delete('/api/admin/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: err.message });
  }
});

// CardUsage Management APIs
app.get('/api/virtual-machines/:virtualMachineId/card-usages', cardUsageController.getCardUsagesByVirtualMachineId);
app.post('/api/card-usages', cardUsageController.createCardUsage);
app.put('/api/card-usages/:id', cardUsageController.updateCardUsage);
app.delete('/api/card-usages/:id', cardUsageController.deleteCardUsage);

// GpuCardModel Management APIs
app.get('/api/gpu-card-models', gpuCardModelController.listGpuCardModels);
app.get('/api/gpu-card-models/:id', gpuCardModelController.getGpuCardModel);
app.post('/api/gpu-card-models', gpuCardModelController.createGpuCardModel);
app.put('/api/gpu-card-models/:id', gpuCardModelController.updateGpuCardModel);
app.delete('/api/gpu-card-models/:id', gpuCardModelController.deleteGpuCardModel);

// GpuCardInstance Management APIs
app.get('/api/gpu-card-instances', gpuCardInstanceController.listGpuCardInstances);
app.get('/api/gpu-card-instances/:id', gpuCardInstanceController.getGpuCardInstance);
app.post('/api/gpu-card-instances', gpuCardInstanceController.createGpuCardInstance);
app.put('/api/gpu-card-instances/:id', gpuCardInstanceController.updateGpuCardInstance);
app.delete('/api/gpu-card-instances/:id', gpuCardInstanceController.deleteGpuCardInstance);

app.post('/api/servers/:serverId/assign-gpu', serverController.assignGpuToServer);
app.delete('/api/servers/:serverId/unassign-gpu/:gpuInstanceId', serverController.unassignGpuFromServer);

// Login Schema (需保留給新舊版引用)
// app.post('/auth/login', async (req, res) => {
//   const loginSchema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().required()
//   });

//   const { error } = loginSchema.validate(req.body);
//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }

//   try {
//     const { email, password } = req.body;
//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign(
//       { 
//         userId: user.id,
//         email: user.email,
//         isAdmin: user.isAdmin 
//       }, 
//       process.env.JWT_SECRET, 
//       { 
//         expiresIn: '1h',
//         algorithm: 'HS256'
//       }
//     );
//     res.json({ 
//       token,
//       userId: user.id // Add userId to the response
//     });
//   } catch (err) {
//     console.error('Error during login:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

app.get('/api/virtual-machines', virtualMachineController.listVirtualMachines);
app.get('/api/virtual-machines/:id', virtualMachineController.getVirtualMachine);
app.post('/api/virtual-machines', virtualMachineController.createVirtualMachine);
app.put('/api/virtual-machines/:id', virtualMachineController.updateVirtualMachine);
app.delete('/api/virtual-machines/:id', virtualMachineController.deleteVirtualMachine);

// ---- Health check ----
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ---- Auth handlers：抽成函式（新/舊路徑共用）----
const logoutHandler = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(200).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    console.log('Logging out user with token:', token);
    // TODO: 真實情境可把 token 加入 blacklist
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Error during logout:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const loginHandler = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h', algorithm: 'HS256' }
    );
    res.json({ token, userId: user.id });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ---

// ---- 路由對應：新舊並存（遷移期）----
// 新：統一掛在 /api/auth/*
app.post('/api/auth/login', loginHandler);
app.post('/api/auth/logout', logoutHandler);

// 舊：維持相容（前端改完後可移除）
app.post('/auth/login', loginHandler);
app.post('/auth/logout', logoutHandler);

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});