import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import GpuCardInstanceCard from '../components/GpuCardInstanceCard';
import { getServer } from '../services/serverApiService';
import { getGpuCardInstancesByServer } from '../services/gpuCardInstanceApiService';
import { useTranslation } from 'react-i18next';

interface Server {
  id: string;
  nameLabel: string;
  ipAddress: string;
  cpuModel: string;
  cpuCores: number;
  memoryGb: number;
  diskSpec: string;
  os: string;
  purpose: string;
}

interface GpuCardInstance {
  id: string;
  gpuCardModelId: string;
  serverId: string;
  status: string;
  purchaseDate: string;
}

const ServerDetail = () => {
  const { id } = useParams();
  const [server, setServer] = useState<Server | null>(null);
  const [gpuCardInstances, setGpuCardInstances] = useState<GpuCardInstance[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchServerAndGpuCardInstances = async () => {
      try {
        const serverData = await getServer(id as string);
        setServer(serverData as Server);

        const gpuCardInstancesData = await getGpuCardInstancesByServer(id as string);
        setGpuCardInstances(gpuCardInstancesData as GpuCardInstance[]);
      } catch (error) {
        console.error('Error fetching server or GPU card instances:', error);
      }
    };
    fetchServerAndGpuCardInstances();
  }, [id]);

  if (!server) {
    return <div>{t('Loading...')}</div>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">{t('Server Detail')}</Typography>
      <Typography><strong>{t('ID')}:</strong> {server.id}</Typography>
      <Typography><strong>{t('Name Label')}:</strong> {server.nameLabel}</Typography>
      <Typography><strong>{t('IP Address')}:</strong> {server.ipAddress}</Typography>
      <Typography><strong>{t('CPU Model')}:</strong> {server.cpuModel}</Typography>
      <Typography><strong>{t('CPU Cores')}:</strong> {server.cpuCores}</Typography>
      <Typography><strong>{t('Memory (GB)')}:</strong> {server.memoryGb}</Typography>
      <Typography><strong>{t('Disk Spec')}:</strong> {server.diskSpec}</Typography>
      <Typography><strong>{t('OS')}:</strong> {server.os}</Typography>
      <Typography><strong>{t('Purpose')}:</strong> {server.purpose}</Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>{t('GPU Card Instances')}</Typography>
      {gpuCardInstances.length > 0 ? (
        gpuCardInstances.map((gpuCardInstance) => (
          <GpuCardInstanceCard key={gpuCardInstance.id} gpuCardInstance={gpuCardInstance} />
        ))
      ) : (
        <Typography>{t('No GPU card instances associated with this server.')}</Typography>
      )}
    </Box>
  );
};

export default ServerDetail;
