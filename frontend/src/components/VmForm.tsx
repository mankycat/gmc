import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box, MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { createVirtualMachine, updateVirtualMachine } from '../services/vmApiService';
import cardUsageApiService from '../services/cardUsageApiService';
import { listServers } from '../services/serverApiService';
import { useTranslation } from 'react-i18next';
// const { createCardUsage, updateCardUsage, deleteCardUsage } = cardUsageApiService;

interface VmFormData {
  nameLabel: string;
  vcpuCoresAssigned: number;
  ramGbAssigned: number;
  gpuResourceSlice: string;
  purpose: string;
  internalIpAddress: string;
  notes: string;
  hostServerId: string;
  userId: string;
  cardUsages?: CardUsage[];
}

interface CardUsage {
  id?: string;
  cardIndex: number;
  cardUuid: string;
  usage?: string;
}

interface VmFormProps {
  vm?: VirtualMachine;
  isEditing?: boolean;
  onClose: (refresh?: boolean) => void;
}

interface VirtualMachine {
  id: string;
  nameLabel: string;
  vcpuCoresAssigned: number;
  ramGbAssigned: number;
  gpuResourceSlice: string;
  purpose: string;
  internalIpAddress: string;
  notes: string;
  hostServerId: string;
  userId: string;
  cardUsages?: CardUsage[];
}

const VmForm: React.FC<VmFormProps> = ({ vm, isEditing = false, onClose }) => {
  const [formData, setFormData] = useState<VmFormData>({
    nameLabel: vm?.nameLabel || '',
    vcpuCoresAssigned: vm?.vcpuCoresAssigned || 0,
    ramGbAssigned: vm?.ramGbAssigned || 0,
    gpuResourceSlice: vm?.gpuResourceSlice || '',
    purpose: vm?.purpose || '',
    internalIpAddress: vm?.internalIpAddress || '',
    notes: vm?.notes || '',
    hostServerId: vm?.hostServerId || '',
    userId: vm?.userId || '',
    cardUsages: vm?.cardUsages || [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [servers, setServers] = useState<{ id: string; nameLabel: string }[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardUsageChange = (index: number, field: keyof CardUsage, value: string | number) => {
    const newCardUsages = [...(formData.cardUsages || [])];
    (newCardUsages[index] as any)[field] = value;
    setFormData({ ...formData, cardUsages: newCardUsages });
  };

  const addCardUsage = () => {
    setFormData({
      ...formData,
      cardUsages: [...(formData.cardUsages || []), { cardIndex: 0, cardUuid: '' }],
    });
  };

  const handleRemoveCardUsage = async (index: number, id?: string) => {
    const newCardUsages = [...(formData.cardUsages || [])];
    newCardUsages.splice(index, 1);
    setFormData({ ...formData, cardUsages: newCardUsages });
    // if (isEditing && id) {
    //   await deleteCardUsage(id);
    // }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nameLabel) newErrors.nameLabel = t('Name is required');
    if (!formData.vcpuCoresAssigned || formData.vcpuCoresAssigned <= 0) newErrors.vcpuCoresAssigned = t('vCPU Cores must be a positive number');
    if (!formData.ramGbAssigned || formData.ramGbAssigned <= 0) newErrors.ramGbAssigned = t('RAM (GB) must be a positive number');
    if (!formData.internalIpAddress) newErrors.internalIpAddress = t('Internal IP Address is required');
    if (!formData.hostServerId) newErrors.hostServerId = t('Host Server ID is required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const submissionData = { ...formData };
      submissionData.userId = localStorage.getItem('userId') || 'unknown_user';
      if (isEditing && vm) {
        const cardUsagesToDelete = vm.cardUsages?.filter((cu) => !submissionData.cardUsages?.some((newCu) => newCu.id === cu.id)).map((cu) => cu.id) || [];
        await updateVirtualMachine(vm.id, {
          ...submissionData,
          cardUsages: submissionData.cardUsages || [], // Ensure cardUsages is an array
          cardUsagesToDelete,
        });
      } else {
        await createVirtualMachine({
          ...submissionData,
          cardUsages: submissionData.cardUsages || [], // Ensure cardUsages is an array
        });
      }
      setSuccess(t('Virtual machine saved successfully'));
      setError(null);
      onClose(true); // Pass true to indicate success and trigger refresh
    } catch (err) {
      setError(t('Failed to save virtual machine'));
      setSuccess(null);
      console.error('Error saving VM:', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h4">{t(isEditing ? 'Edit' : 'Create')} {t('Virtual Machine')}</Typography>
      <TextField
        label={t('Name')}
        name="nameLabel"
        value={formData.nameLabel}
        onChange={handleChange}
        error={!!errors.nameLabel}
        helperText={errors.nameLabel}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label={t('vCPU Cores')}
        name="vcpuCoresAssigned"
        type="number"
        value={formData.vcpuCoresAssigned}
        onChange={handleChange}
        error={!!errors.vcpuCoresAssigned}
        helperText={errors.vcpuCoresAssigned}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label={t('RAM (GB)')}
        name="ramGbAssigned"
        type="number"
        value={formData.ramGbAssigned}
        onChange={handleChange}
        error={!!errors.ramGbAssigned}
        helperText={errors.ramGbAssigned}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label={t('Internal IP Address')}
        name="internalIpAddress"
        value={formData.internalIpAddress}
        onChange={handleChange}
        error={!!errors.internalIpAddress}
        helperText={errors.internalIpAddress}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label={t('Purpose')}
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
        error={!!errors.purpose}
        helperText={errors.purpose}
        fullWidth
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.hostServerId}>
        <InputLabel>{t('Host Server')}</InputLabel>
        <Select
          name="hostServerId"
          value={formData.hostServerId}
          onChange={handleChange}
          label={t('Host Server')}
        >
          {servers.map((server) => (
            <MenuItem key={server.id} value={server.id}>
              {server.nameLabel}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.hostServerId}</FormHelperText>
      </FormControl>
      {formData.cardUsages?.map((cardUsage, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            label={t('Card Index')}
            type="number"
            value={cardUsage.cardIndex}
            onChange={(e) => handleCardUsageChange(index, 'cardIndex', (e.target as HTMLInputElement).valueAsNumber)}
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            label={t('Card UUID')}
            value={cardUsage.cardUuid}
            onChange={(e) => handleCardUsageChange(index, 'cardUuid', e.target.value)}
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            label={t('Usage')}
            value={cardUsage.usage}
            onChange={(e) => handleCardUsageChange(index, 'usage', e.target.value)}
            fullWidth
            sx={{ mb: 1 }}
          />
          <Button onClick={() => handleRemoveCardUsage(index, cardUsage.id)} color="error">
            {t('Remove')}
          </Button>
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Button onClick={addCardUsage} variant="outlined">
          {t('Add Card Usage')}
        </Button>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button onClick={() => onClose(false)} color="secondary" variant="outlined">
            {t('CANCEL')}
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {isEditing ? t('UPDATE') : t('CREATE')}
          </Button>
        </Box>
      </Box>
      {success && <Typography color="success.main">{success}</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default VmForm;
