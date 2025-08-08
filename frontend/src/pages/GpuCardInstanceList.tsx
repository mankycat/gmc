import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Dialog } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import GpuCardInstanceForm from '../components/GpuCardInstanceForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import { getGpuCardInstances, createGpuCardInstance, updateGpuCardInstance, deleteGpuCardInstance } from '../services/gpuCardInstanceApiService';
import { getGpuCardModels } from '../services/gpuCardModelApiService';
import { getServers } from '../services/serverApiService';
import { GpuCardInstanceFormData } from '../components/GpuCardInstanceForm';
import { useTranslation } from 'react-i18next';

interface GpuCardInstance {
  id: string;
  count: number;
  gpuCardModelId: string;
  serverId: string;
}

interface GpuCardModel {
  id: string;
  modelName: string;
}

interface Server {
  id: string;
  nameLabel: string;
}

const GpuCardInstanceList: React.FC = () => {
  const [gpuCardInstances, setGpuCardInstances] = useState<GpuCardInstance[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedGpuCardInstance, setSelectedGpuCardInstance] = useState<GpuCardInstance | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [gpuCardInstanceToDelete, setGpuCardInstanceToDelete] = useState<GpuCardInstance | null>(null);
  const [gpuCardModels, setGpuCardModels] = useState<GpuCardModel[]>([]);
  const [servers, setServers] = useState<Server[]>([]);
  const [saveError, setSaveError] = useState<string | null>(null); // State to hold the error message
  const { t } = useTranslation();

  const handleAddGpuCardInstance = () => {
    setIsEditing(false);
    setSelectedGpuCardInstance(null);
    setSaveError(null); // Clear previous errors when opening the form
    setOpenForm(true);
  };

  const handleEditGpuCardInstance = (gpuCardInstance: GpuCardInstance) => {
    setIsEditing(true);
    setSelectedGpuCardInstance(gpuCardInstance);
    setSaveError(null); // Clear previous errors when opening the form
    setOpenForm(true);
  };

  const handleDeleteGpuCardInstance = (gpuCardInstance: GpuCardInstance) => {
    setGpuCardInstanceToDelete(gpuCardInstance);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (gpuCardInstanceToDelete) {
      try {
        await deleteGpuCardInstance(gpuCardInstanceToDelete.id);
        setGpuCardInstances(gpuCardInstances.filter((gpuCardInstance) => gpuCardInstance.id !== gpuCardInstanceToDelete.id));
      } catch (error) {
        console.error('Error deleting GpuCardInstance:', error);
        // Optionally, display an error message for deletion
      }
    }
    setDeleteDialogOpen(false);
    setGpuCardInstanceToDelete(null);
  };

  useEffect(() => {
    const fetchGpuCardInstances = async () => {
      try {
        const data = await getGpuCardInstances();
        setGpuCardInstances(data as GpuCardInstance[]);
      } catch (error) {
        console.error('Error fetching GpuCardInstances:', error);
      }
    };
    fetchGpuCardInstances();

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
        const response = await getServers();
        if (Array.isArray(response)) {
          setServers(response);
        } else {
          console.error('Invalid response data for Servers:', response);
        }
      } catch (error) {
        console.error('Error fetching Servers:', error);
      }
    };
    fetchServers();
  }, []);

  const getGpuCardModelName = (gpuCardModelId: string) => {
    const gpuCardModel = gpuCardModels.find((model) => model.id === gpuCardModelId);
    return gpuCardModel ? gpuCardModel.modelName : t('Unknown');
  };

  const getServerName = (serverId: string) => {
    const server = servers.find((server) => server.id === serverId);
    return server ? server.nameLabel : t('Unknown');
  };

  const handleFormSave = async (gpuCardInstanceData: GpuCardInstanceFormData) => {
    setSaveError(null); // Clear previous errors on new save attempt
    try {
      const gpuCardInstanceDataToSend = {
        ...gpuCardInstanceData,
        count: parseInt(gpuCardInstanceData.count.toString(), 10),
      };
      if (isEditing && gpuCardInstanceData.id) {
        const updatedGpuCardInstance = await updateGpuCardInstance(gpuCardInstanceData.id, gpuCardInstanceDataToSend);
        setGpuCardInstances(gpuCardInstances.map((gpuCardInstance) => (gpuCardInstance.id === updatedGpuCardInstance.id ? updatedGpuCardInstance : gpuCardInstance)));
      } else {
        const newGpuCardInstance = await createGpuCardInstance(gpuCardInstanceDataToSend);
        setGpuCardInstances([...gpuCardInstances, newGpuCardInstance]);
      }
      setOpenForm(false); // Only close form on successful save
    } catch (error: any) {
      console.error('Error saving GpuCardInstance:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setSaveError(error.response.data.message);
      } else {
        setSaveError(t('An unexpected error occurred while saving the GPU Card Instance.'));
      }
      throw error; // Re-throw error to allow GpuCardInstanceForm to catch it if needed for its own validation/state
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">{t('GPU Card Instance List')}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddGpuCardInstance}
          sx={{ height: 'fit-content' }}
        >
          {t('ADD GPU CARD INSTANCE')}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('ID')}</TableCell>
              <TableCell>{t('GPU Card Model')}</TableCell>
              <TableCell>{t('Server')}</TableCell>
              <TableCell>{t('Count')}</TableCell>
              <TableCell>{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gpuCardInstances.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">{t('No GPU Card Instances available')}</TableCell>
              </TableRow>
            ) : (
              gpuCardInstances.map((gpuCardInstance) => (
                <TableRow key={gpuCardInstance.id}>
                  <TableCell>{gpuCardInstance.id}</TableCell>
                  <TableCell>{getGpuCardModelName(gpuCardInstance.gpuCardModelId)}</TableCell>
                  <TableCell>{getServerName(gpuCardInstance.serverId)}</TableCell>
                  <TableCell>{gpuCardInstance.count}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditGpuCardInstance(gpuCardInstance)}><Edit /></IconButton>
                    <IconButton onClick={() => handleDeleteGpuCardInstance(gpuCardInstance)}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openForm} onClose={() => {
        setOpenForm(false);
        setSaveError(null); // Clear error when dialog is closed by user
      }} fullWidth maxWidth="md">
        <GpuCardInstanceForm
          gpuCardInstance={selectedGpuCardInstance ?? undefined}
          isEditing={isEditing}
          onClose={() => {
            setOpenForm(false);
            setSaveError(null); // Clear error when dialog is closed by GpuCardInstanceForm
          }}
          onSave={handleFormSave} // Use the new handleFormSave function
        />
        {saveError && (
          <Typography color="error" sx={{ margin: 2 }}>
            {saveError}
          </Typography>
        )}
      </Dialog>
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        resourceName={`${t('GPU Card Instance')} ${gpuCardInstanceToDelete?.id || ''}`}
      />
    </Box>
  );
};

export default GpuCardInstanceList;