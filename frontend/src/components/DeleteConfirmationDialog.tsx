import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  resourceName: string;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({ open, onClose, onConfirm, resourceName }) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t('Confirm Deletion')}</DialogTitle>
      <DialogContent>
        {t('Are you sure you want to delete "{{resourceName}}"? This action cannot be undone.', { resourceName })}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('Cancel')}</Button>
        <Button onClick={onConfirm} color="error">{t('Delete')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
