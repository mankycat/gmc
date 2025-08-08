import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface VmCardProps {
  vm: {
    id: string;
    nameLabel: string;
  };
  onDelete: (id: string) => void;
}

const VmCard: React.FC<VmCardProps> = ({ vm, onDelete }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h6">{vm.nameLabel}</Typography>
      <Button variant="contained" color="error" onClick={() => onDelete(vm.id)} sx={{ mt: 1 }}>
        {t('Delete')}
      </Button>
    </Box>
  );
};

export default VmCard;
