import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google/login';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      // Assuming the token contains userId, you might need to decode it
      // For simplicity, let's assume it's directly available in the response
      localStorage.setItem('userId', data.userId); 
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      <Box sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3
      }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          {error && <Typography color="error" sx={{ marginBottom: 2 }}>{error}</Typography>}
          <Button type="submit" variant="contained" sx={{ width: '100%' }}>
            Login
          </Button>
        </form>
        <Button variant="contained" onClick={handleGoogleLogin} sx={{ marginTop: 2, width: '100%' }}>
          Login with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
