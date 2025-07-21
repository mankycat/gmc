import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

interface AdminUserFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  isAdmin: boolean;
}

interface AdminUserFormProps {
  user?: AdminUserFormData;
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: AdminUserFormData) => void;
}

const AdminUserForm: React.FC<AdminUserFormProps> = ({ user, isEditing, onClose, onSave }) => {
  const [formData, setFormData] = useState<AdminUserFormData>({
    email: user?.email || '',
    password: user?.password || '',
    isAdmin: user?.isAdmin || false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdminUserFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof AdminUserFormData, string>> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (isEditing && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
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
      [name]: name === 'isAdmin' ? event.target.checked : value,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <Typography variant="h4">{isEditing ? 'Edit' : 'Create'} Admin User</Typography>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      {isEditing && (
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.isAdmin}
            onChange={handleChange}
            name="isAdmin"
          />
        }
        label="isAdmin"
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          CANCEL
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {isEditing ? 'UPDATE' : 'CREATE'}
        </Button>
      </Box>
    </Box>
  );
};

export default AdminUserForm;
