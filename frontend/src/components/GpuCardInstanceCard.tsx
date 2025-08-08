import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <Box sx={{ padding: 2, border: '1px solid gray', marginBottom: 2 }}>
      <Typography><strong>{t('ID')}:</strong> {gpuCardInstance.id}</Typography>
      <Typography><strong>{t('GPU Card Model ID')}:</strong> {gpuCardInstance.gpuCardModelId}</Typography>
      <Typography><strong>{t('Server ID')}:</strong> {gpuCardInstance.serverId}</Typography>
      <Typography><strong>{t('Status')}:</strong> {gpuCardInstance.status}</Typography>
      <Typography><strong>{t('Purchase Date')}:</strong> {gpuCardInstance.purchaseDate}</Typography>
    </Box>
  );
};

export default GpuCardInstanceCard;
