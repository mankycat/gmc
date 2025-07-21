import React from 'react';
import GpuCardInstanceForm from './GpuCardInstanceForm';

interface GpuCardInstanceFormWrapperProps {
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: any) => void;
}

const GpuCardInstanceFormWrapper: React.FC<GpuCardInstanceFormWrapperProps> = ({ isEditing, onClose, onSave }) => {
  return (
    <GpuCardInstanceForm 
      isEditing={isEditing} 
      onClose={onClose} 
      onSave={onSave} 
    />
  );
};

export default GpuCardInstanceFormWrapper;
