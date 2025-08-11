// vite.config.js
/* eslint-env node */
/* global process */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const API_BASE = (env.VITE_API_BASE || '/api').trim()

  const useProxy = API_BASE === '/api' || API_BASE.startsWith('/')

  return defineConfig({
    plugins: [react()],
    server: {
      allowedHosts: true,
      host: true,
      port: 5174,
      strictPort: true,
      hmr: { protocol: 'ws' }, // LAN 足夠；ngrok 用 wss 並指定 host
      ...(useProxy
        ? {
            proxy: {
              '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                ws: true,
              },
              '/auth': { 
                target: 'http://localhost:3001', 
                changeOrigin: true, 
                ws: true 
              }, // for Google OAuth
            },
          }
        : {}),
    },
  })
}
