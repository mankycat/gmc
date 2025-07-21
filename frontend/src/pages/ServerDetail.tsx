import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import GpuCardInstanceCard from '../components/GpuCardInstanceCard';
import { getServer } from '../services/serverApiService';
import { getGpuCardInstancesByServer } from '../services/gpuCardInstanceApiService';

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
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Server Detail</Typography>
      <Typography><strong>ID:</strong> {server.id}</Typography>
      <Typography><strong>Name Label:</strong> {server.nameLabel}</Typography>
      <Typography><strong>IP Address:</strong> {server.ipAddress}</Typography>
      <Typography><strong>CPU Model:</strong> {server.cpuModel}</Typography>
      <Typography><strong>CPU Cores:</strong> {server.cpuCores}</Typography>
      <Typography><strong>Memory (GB):</strong> {server.memoryGb}</Typography>
      <Typography><strong>Disk Spec:</strong> {server.diskSpec}</Typography>
      <Typography><strong>OS:</strong> {server.os}</Typography>
      <Typography><strong>Purpose:</strong> {server.purpose}</Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>GPU Card Instances</Typography>
      {gpuCardInstances.length > 0 ? (
        gpuCardInstances.map((gpuCardInstance) => (
          <GpuCardInstanceCard key={gpuCardInstance.id} gpuCardInstance={gpuCardInstance} />
        ))
      ) : (
        <Typography>No GPU card instances associated with this server.</Typography>
      )}
    </Box>
  );
};

export default ServerDetail;
