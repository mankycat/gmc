import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

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

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof GpuCardModelFormData, string>> = {};
    if (!formData.vendor) newErrors.vendor = 'Vendor is required';
    if (!formData.modelName) newErrors.modelName = 'Model Name is required';
    if (formData.memoryGb <= 0) newErrors.memoryGb = 'Memory (GB) must be greater than 0';
    if (formData.totalAcquiredStock < 0) newErrors.totalAcquiredStock = 'Total Acquired Stock must be non-negative';
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
      <Typography variant="h4">{isEditing ? 'Edit GPU Card Model' : 'Add GPU Card Model'}</Typography>
      <TextField
        label="Vendor"
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
        label="Model Name"
        name="modelName"
        value={formData.modelName}
        onChange={handleChange}
        error={!!errors.modelName}
        helperText={errors.modelName}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Architecture"
        name="architecture"
        value={formData.architecture}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Memory (GB)"
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
        label="Total Acquired Stock"
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
          CANCEL
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {isEditing ? 'Update' : 'Create'}
        </Button>
      </Box>
    </Box>
  );
};

export default GpuCardModelForm;
