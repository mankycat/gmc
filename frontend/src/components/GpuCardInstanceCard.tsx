import React from 'react';
import { Box, Typography } from '@mui/material';

interface GpuCardInstance {
  id: string;
  gpuCardModelId: string;
  serverId: string;
  status: string;
  purchaseDate: string;
}

interface GpuCardInstanceCardProps {
  gpuCardInstance: GpuCardInstance;
}

const GpuCardInstanceCard: React.FC<GpuCardInstanceCardProps> = ({ gpuCardInstance }) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid gray', marginBottom: 2 }}>
      <Typography><strong>ID:</strong> {gpuCardInstance.id}</Typography>
      <Typography><strong>GPU Card Model ID:</strong> {gpuCardInstance.gpuCardModelId}</Typography>
      <Typography><strong>Server ID:</strong> {gpuCardInstance.serverId}</Typography>
      <Typography><strong>Status:</strong> {gpuCardInstance.status}</Typography>
      <Typography><strong>Purchase Date:</strong> {gpuCardInstance.purchaseDate}</Typography>
    </Box>
  );
};

export default GpuCardInstanceCard;
