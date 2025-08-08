import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { getGpuCardModels } from '../services/gpuCardModelApiService';
import { listServers } from '../services/serverApiService';
import { useTranslation } from 'react-i18next';

export interface GpuCardInstanceFormData {
  id?: string;
  count: number;
  gpuCardModelId: string;
  serverId: string;
}

interface GpuCardInstanceFormProps {
  gpuCardInstance?: GpuCardInstanceFormData;
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: GpuCardInstanceFormData) => Promise<void>; // onSave now returns a Promise<void>
}

const GpuCardInstanceForm: React.FC<GpuCardInstanceFormProps> = ({ gpuCardInstance, isEditing, onClose, onSave }) => {
  const [formData, setFormData] = useState<GpuCardInstanceFormData>({
    id: gpuCardInstance?.id,
    count: gpuCardInstance?.count || 0,
    gpuCardModelId: gpuCardInstance?.gpuCardModelId || '',
    serverId: gpuCardInstance?.serverId || '',
  });

  const [gpuCardModels, setGpuCardModels] = useState<any[]>([]);
  const [servers, setServers] = useState<any[]>([]);

  const [errors, setErrors] = useState<Partial<Record<keyof GpuCardInstanceFormData, string>>>({});
  // const [stockError, setStockError] = useState<string | null>(null); // Removed stockError
  const { t } = useTranslation();

  useEffect(() => {
    const fetchGpuCardModels = async () => {
      try {
        const response = await getGpuCardModels();
        if (Array.isArray(response)) {
          setGpuCardModels(response);
        } else {
          console.error('Invalid response data for GpuCardModels:', response);
        }
      } catch (error) {
        console.error('Error fetching GpuCardModels:', error);
      }
    };
    fetchGpuCardModels();

    const fetchServers = async () => {
      try {
        const data = await listServers();
        setServers(data);
      } catch (error) {
        console.error('Error listing servers:', error);
      }
    };
    fetchServers();
  }, []);

  useEffect(() => {
    // Reset form data when gpuCardInstance changes (e.g., when editing a different instance)
    setFormData({
      id: gpuCardInstance?.id,
      count: gpuCardInstance?.count || 0,
      gpuCardModelId: gpuCardInstance?.gpuCardModelId || '',
      serverId: gpuCardInstance?.serverId || '',
    });
    setErrors({}); // Clear validation errors on instance change
  }, [gpuCardInstance]);


  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof GpuCardInstanceFormData, string>> = {};
    if (!formData.gpuCardModelId) newErrors.gpuCardModelId = t('GPU Card Model is required');
    if (!formData.serverId) newErrors.serverId = t('Server is required');
    if (formData.count <= 0) newErrors.count = t('Count must be greater than 0');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await onSave(formData);
        // onSave now handles closing the dialog on success
        // onClose(); // Removed, as parent GpuCardInstanceList handles closing on success
      } catch (error: any) {
        // The error message is now handled and displayed by GpuCardInstanceList.
        // We just need to catch it here to prevent uncaught promise rejections
        // and ensure the form doesn't close on error.
        console.error('Form submission error:', error);
      }
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the specific error when the field changes
    if (errors[name as keyof GpuCardInstanceFormData]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <Typography variant="h4">{isEditing ? t('Edit GPU Card Instance') : t('Create GPU Card Instance')}</Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="gpu-card-model-label">{t('GPU Card Model')}</InputLabel>
        <Select
          labelId="gpu-card-model-label"
          name="gpuCardModelId"
          value={formData.gpuCardModelId}
          onChange={handleChange}
          error={!!errors.gpuCardModelId}
          label={t('GPU Card Model')}
        >
          {gpuCardModels.map((gpuCardModel) => (
            <MenuItem key={gpuCardModel.id} value={gpuCardModel.id}>{gpuCardModel.modelName}</MenuItem>
          ))}
        </Select>
        {errors.gpuCardModelId && <Typography color="error" variant="caption">{errors.gpuCardModelId}</Typography>}
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="server-label">{t('Server')}</InputLabel>
        <Select
          labelId="server-label"
          name="serverId"
          value={formData.serverId}
          onChange={handleChange}
          error={!!errors.serverId}
          label={t('Server')}
        >
          {servers.map((server) => (
            <MenuItem key={server.id} value={server.id}>{server.nameLabel}</MenuItem>
          ))}
        </Select>
        {errors.serverId && <Typography color="error" variant="caption">{errors.serverId}</Typography>}
      </FormControl>
      <TextField
        label={t('Count')}
        name="count"
        value={formData.count}
        onChange={handleChange}
        error={!!errors.count}
        helperText={errors.count}
        fullWidth
        sx={{ marginBottom: 2 }}
        type="number"
        InputProps={{ inputProps: { min: 1 } }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          {t('CANCEL')}
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {isEditing ? t('UPDATE') : t('CREATE')}
        </Button>
      </Box>
      {/* Removed stockError rendering, as it's handled by the parent GpuCardInstanceList */}
    </Box>
  );
};

export default GpuCardInstanceForm;