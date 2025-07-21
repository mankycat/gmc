import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface GpuCardProps {
  gpuCard: {
    id: string;
    model: string;
    memoryGb: number;
    gpuModel: string;
    purpose?: string;
    notes?: string;
  };
}

const ServerGpuCard: React.FC<GpuCardProps> = ({ gpuCard }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{gpuCard.gpuModel}</Typography>
        <Typography><strong>Model:</strong> {gpuCard.model}</Typography>
        <Typography><strong>Memory:</strong> {gpuCard.memoryGb} GB</Typography>
        {gpuCard.purpose && <Typography><strong>Purpose:</strong> {gpuCard.purpose}</Typography>}
        {gpuCard.notes && <Typography><strong>Notes:</strong> {gpuCard.notes}</Typography>}
      </CardContent>
    </Card>
  );
};

export default ServerGpuCard;
