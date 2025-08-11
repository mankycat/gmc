import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import api from '../services/apiClient'; // ← 用 axios instance（baseURL=/api
import axios from 'axios';

type LoginResponse = { token: string; userId: string };

function getErrMsg(e: unknown, fallback: string) {
  // axios-like
  if (e && typeof e === 'object' && 'response' in e) {
    const r = (e as any).response;
    const msg = r?.data?.message ?? r?.data ?? r?.statusText;
    if (typeof msg === 'string') return msg;
  }
  // 一般 Error
  if (e instanceof Error) return e.message;
  return fallback;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  // To-do: Not implemented.
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google/login';
    // window.location.href = '/auth/google/login';
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3001/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     if (!response.ok) {
  //       throw new Error(t('Invalid credentials'));
  //     }
  //     const data = await response.json();
  //     localStorage.setItem('authToken', data.token);
  //     // Assuming the token contains userId, you might need to decode it
  //     // For simplicity, let's assume it's directly available in the response
  //     localStorage.setItem('userId', data.userId); 
  //     window.location.href = '/';
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const { data } = await api.post<LoginResponse>('/auth/login', { email, password });
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userId', data.userId);
      window.location.href = '/';
    } catch (err) {
      setError(getErrMsg(err, t('Invalid credentials')));
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
        <Typography variant="h4" sx={{ marginBottom: 2 }}>{t('Login')}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t('Email')}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            label={t('Password')}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          {error && <Typography color="error" sx={{ marginBottom: 2 }}>{error}</Typography>}
          <Button type="submit" variant="contained" sx={{ width: '100%' }}>
            {t('Login')}
          </Button>
        </form>
        <Button variant="contained" onClick={handleGoogleLogin} sx={{ marginTop: 2, width: '100%' }}>
          {t('Login with Google')}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
