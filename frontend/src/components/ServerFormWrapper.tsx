import React from 'react';
import ServerForm from './ServerForm';

interface ServerFormWrapperProps {
  isEditing: boolean;
  onClose: () => void;
  onSave: (formData: any) => void;
}

const ServerFormWrapper: React.FC<ServerFormWrapperProps> = ({ isEditing, onClose, onSave }) => {
  return (
    <ServerForm 
      isEditing={isEditing} 
      onClose={onClose} 
      onSave={onSave} 
    />
  );
};

export default ServerFormWrapper;
