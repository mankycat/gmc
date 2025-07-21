import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ServerList from './pages/ServerList';
import ServerDetail from './pages/ServerDetail';
import AdminUserListPage from './pages/AdminUserListPage';
import Login from './components/Login';
import ServerFormWrapper from './components/ServerFormWrapper';
import VmListPage from './pages/VmListPage';
import VmDetailPage from './pages/VmDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import GpuCardModelList from './pages/GpuCardModelList';
import GpuCardModelFormWrapper from './components/GpuCardModelFormWrapper';
import GpuCardInstanceList from './pages/GpuCardInstanceList';
import GpuCardInstanceFormWrapper from './components/GpuCardInstanceFormWrapper';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path="admin/users" element={<AdminUserListPage />} />
          <Route path="vms" element={<VmListPage />} />
          <Route path="vms/:id" element={<VmDetailPage />} />
          <Route path="gpu-card-models" element={<GpuCardModelList />} />
          <Route path="gpu-card-instances" element={<GpuCardInstanceList />} />
          <Route index element={<ServerList />} />
          <Route path="servers/:id" element={<ServerDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
