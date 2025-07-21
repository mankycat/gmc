const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const userRepository = require('../repositories/userRepository');

const listUsers = async () => {
  return userRepository.findMany();
};

const getUser = async (id) => {
  return userRepository.findUnique(id);
};

const createUser = async (userData) => {
  const { email, password, isAdmin } = userData;
  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.create({
    email,
    password: hashedPassword,
    isAdmin,
    status: 'approved'
  });
};

const updateUser = async (id, userData) => {
  const { email, password, isAdmin } = userData;
  const existingUser = await userRepository.findUnique(id);
  if (!existingUser) {
    throw new Error('User not found');
  }
  return userRepository.update(id, {
    email,
    ...(password && { password: await bcrypt.hash(password, 10) }),
    ...(isAdmin !== undefined && { isAdmin }),
  });
};

const deleteUser = async (id) => {
  return userRepository.delete(id);
};

const createDefaultAdminUser = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error('ADMIN_EMAIL or ADMIN_PASSWORD is not set in .env file');
      return;
    }

    const existingAdmin = await userRepository.findByEmail(adminEmail);
    if (!existingAdmin) {
      await createUser({
        email: adminEmail,
        password: adminPassword,
        isAdmin: true
      });
      console.log('Default admin user created');
    }
  } catch (err) {
    console.error('Error creating default admin user:', err);
  }
};

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createDefaultAdminUser // Export the function
};
