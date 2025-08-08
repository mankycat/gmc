import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
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

interface ServerFormProps {
  server?: Server;
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: Server) => void;
}

const ServerForm: React.FC<ServerFormProps> = ({ server, isEditing, onClose, onSave }) => {
  const [formData, setFormData] = useState<Server>({
    id: server?.id || '',
    nameLabel: server?.nameLabel || '',
    ipAddress: server?.ipAddress || '',
    cpuModel: server?.cpuModel || '',
    cpuCores: server?.cpuCores || 0,
    memoryGb: server?.memoryGb || 0,
    diskSpec: server?.diskSpec || '',
    os: server?.os || '',
    purpose: server?.purpose || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Server, string>>>({});
  const { t } = useTranslation();

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Server, string>> = {};
    if (!formData.nameLabel) newErrors.nameLabel = t('Name Label is required');
    if (!formData.ipAddress) newErrors.ipAddress = t('IP Address is required');
    // Add more validation rules as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'cpuCores' || name === 'memoryGb' ? Number(value) : value,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <Typography variant="h4">{isEditing ? (server ? t('Edit Server') : t('Add Server')) : t('View Server')}</Typography>
      <TextField
        label={t('Name Label')}
        name="nameLabel"
        value={formData.nameLabel}
        onChange={isEditing ? handleChange : undefined}
        error={!!errors.nameLabel}
        helperText={errors.nameLabel}
        fullWidth
        sx={{ marginBottom: 2 }}
        InputProps={{
          readOnly: !isEditing,
        }}
      />
      <TextField
        label={t('IP Address')}
        name="ipAddress"
        value={formData.ipAddress}
        onChange={handleChange}
        error={!!errors.ipAddress}
        helperText={errors.ipAddress}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('CPU Model')}
        name="cpuModel"
        value={formData.cpuModel}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('CPU Cores')}
        name="cpuCores"
        value={formData.cpuCores}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('Memory (GB)')}
        name="memoryGb"
        value={formData.memoryGb}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('Disk Spec')}
        name="diskSpec"
        value={formData.diskSpec}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('OS')}
        name="os"
        value={formData.os}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('Purpose')}
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          {t('CANCEL')}
        </Button>
        <Button type="submit" variant="contained" color="primary" disabled={!isEditing}>
          {isEditing ? (server ? t('UPDATE') : t('CREATE')) : t('CREATE')}
        </Button>
      </Box>
    </Box>
  );
};

export default ServerForm;
