import React from 'react';
import GpuCardModelForm from './GpuCardModelForm';

interface GpuCardModelFormWrapperProps {
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: any) => void;
}

const GpuCardModelFormWrapper: React.FC<GpuCardModelFormWrapperProps> = ({ isEditing, onClose, onSave }) => {
  return (
    <GpuCardModelForm 
      isEditing={isEditing} 
      onClose={onClose} 
      onSave={onSave} 
    />
  );
};

export default GpuCardModelFormWrapper;
