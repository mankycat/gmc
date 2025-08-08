import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface GpuCardModel {
  id: string;
  model: string;
  memoryGb: number;
}

interface GpuCardModelFormProps {
  gpuCardModel?: GpuCardModelFormData;
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: GpuCardModelFormData) => void;
}

interface GpuCardModelFormData {
  id?: string;
  vendor: string;
  modelName: string;
  architecture: string;
  memoryGb: number;
  totalAcquiredStock: number;
}

const GpuCardModelForm: React.FC<GpuCardModelFormProps> = ({ gpuCardModel, isEditing, onClose, onSave }) => {
  const [formData, setFormData] = useState<GpuCardModelFormData>({
    id: gpuCardModel?.id,
    vendor: gpuCardModel?.vendor || '',
    modelName: gpuCardModel?.modelName || '',
    architecture: gpuCardModel?.architecture || '',
    memoryGb: gpuCardModel?.memoryGb || 0,
    totalAcquiredStock: gpuCardModel?.totalAcquiredStock || 0,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof GpuCardModelFormData, string>>>({});
  const { t } = useTranslation();

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof GpuCardModelFormData, string>> = {};
    if (!formData.vendor) newErrors.vendor = t('Vendor is required');
    if (!formData.modelName) newErrors.modelName = t('Model Name is required');
    if (formData.memoryGb <= 0) newErrors.memoryGb = t('Memory (GB) must be greater than 0');
    if (formData.totalAcquiredStock < 0) newErrors.totalAcquiredStock = t('Total Acquired Stock must be non-negative');
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
      [name]: name === 'memoryGb' || name === 'totalAcquiredStock' ? Number(value) : value,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <Typography variant="h4">{isEditing ? t('Edit GPU Card Model') : t('Add GPU Card Model')}</Typography>
      <TextField
        label={t('Vendor')}
        name="vendor"
        value={formData.vendor}
        onChange={handleChange}
        error={!!errors.vendor}
        helperText={errors.vendor}
        fullWidth
        sx={{ marginBottom: 2 }}
        InputProps={{
          readOnly: false,
        }}
      />
      <TextField
        label={t('Model Name')}
        name="modelName"
        value={formData.modelName}
        onChange={handleChange}
        error={!!errors.modelName}
        helperText={errors.modelName}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('Architecture')}
        name="architecture"
        value={formData.architecture}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label={t('Memory (GB)')}
        name="memoryGb"
        value={formData.memoryGb}
        onChange={handleChange}
        error={!!errors.memoryGb}
        helperText={errors.memoryGb}
        fullWidth
        sx={{ marginBottom: 2 }}
        type="number"
      />
      <TextField
        label={t('Total Acquired Stock')}
        name="totalAcquiredStock"
        value={formData.totalAcquiredStock}
        onChange={handleChange}
        error={!!errors.totalAcquiredStock}
        helperText={errors.totalAcquiredStock}
        fullWidth
        sx={{ marginBottom: 2 }}
        type="number"
        InputProps={{
          readOnly: false,
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          {t('CANCEL')}
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {isEditing ? t('Update') : t('Create')}
        </Button>
      </Box>
    </Box>
  );
};

export default GpuCardModelForm;
