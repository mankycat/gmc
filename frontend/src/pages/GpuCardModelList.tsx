import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Dialog } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import GpuCardModelForm from '../components/GpuCardModelForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import { getGpuCardModels, createGpuCardModel, updateGpuCardModel, deleteGpuCardModel } from '../services/gpuCardModelApiService';

interface GpuCardModel {
  id: string;
  vendor: string;
  modelName: string;
  architecture: string | null;
  memoryGb: number;
  totalAcquiredStock: number;
}

interface GpuCardModelFormData {
  id?: string;
  vendor: string;
  modelName: string;
  architecture: string;
  memoryGb: number;
  totalAcquiredStock: number;
}

const GpuCardModelList = () => {
  const [gpuCardModels, setGpuCardModels] = useState<GpuCardModelFormData[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedGpuCardModel, setSelectedGpuCardModel] = useState<GpuCardModel | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [gpuCardModelToDelete, setGpuCardModelToDelete] = useState<GpuCardModel | null>(null);

  const handleAddGpuCardModel = () => {
    setIsEditing(false);
    setSelectedGpuCardModel(null);
    setOpenForm(true);
  };

  const handleEditGpuCardModel = (gpuCardModel: GpuCardModel) => {
    setIsEditing(true);
    setSelectedGpuCardModel(gpuCardModel);
    setOpenForm(true);
  };

  const handleDeleteGpuCardModel = (gpuCardModel: GpuCardModel) => {
    setGpuCardModelToDelete(gpuCardModel);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (gpuCardModelToDelete) {
      try {
        await deleteGpuCardModel(gpuCardModelToDelete.id);
        setGpuCardModels(gpuCardModels.filter((gpuCardModel) => gpuCardModel.id !== gpuCardModelToDelete.id));
      } catch (error) {
        console.error('Error deleting GpuCardModel:', error);
      }
    }
    setDeleteDialogOpen(false);
    setGpuCardModelToDelete(null);
  };

  useEffect(() => {
    const fetchGpuCardModels = async () => {
      try {
        const data = await getGpuCardModels();
        setGpuCardModels((data as GpuCardModel[]).map(gpuCardModel => ({
          id: gpuCardModel.id,
          vendor: gpuCardModel.vendor,
          modelName: gpuCardModel.modelName,
          architecture: gpuCardModel.architecture ?? '',
          memoryGb: gpuCardModel.memoryGb,
          totalAcquiredStock: gpuCardModel.totalAcquiredStock ?? 0
        })));
      } catch (error) {
        console.error('Error fetching GpuCardModels:', error);
      }
    };
    fetchGpuCardModels();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">GPU Card Model List</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddGpuCardModel}
          sx={{ height: 'fit-content' }}
        >
          ADD GPU CARD MODEL
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Vendor</TableCell>
              <TableCell>Model Name</TableCell>
              <TableCell>Architecture</TableCell>
              <TableCell>Memory (GB)</TableCell>
              <TableCell>Total Acquired Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gpuCardModels.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">No GPU Card Models available</TableCell>
              </TableRow>
            ) : (
              gpuCardModels.map((gpuCardModel) => (
                <TableRow key={gpuCardModel.id}>
                  <TableCell>{gpuCardModel.id}</TableCell>
                  <TableCell>{gpuCardModel.vendor}</TableCell>
                  <TableCell>{gpuCardModel.modelName}</TableCell>
                  <TableCell>{gpuCardModel.architecture}</TableCell>
                  <TableCell>{gpuCardModel.memoryGb}</TableCell>
                  <TableCell>{gpuCardModel.totalAcquiredStock}</TableCell>
                  <TableCell>
                    {gpuCardModel.id && (
                      <>
                        <IconButton onClick={() => handleEditGpuCardModel(gpuCardModel as GpuCardModel)}><Edit /></IconButton>
                        <IconButton onClick={() => handleDeleteGpuCardModel(gpuCardModel as GpuCardModel)}><Delete /></IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openForm} onClose={() => setOpenForm(false)} fullWidth maxWidth="md">
        <GpuCardModelForm
          gpuCardModel={selectedGpuCardModel ? {
            id: selectedGpuCardModel.id,
            vendor: selectedGpuCardModel.vendor,
            modelName: selectedGpuCardModel.modelName,
            architecture: selectedGpuCardModel.architecture ?? '',
            memoryGb: selectedGpuCardModel.memoryGb,
            totalAcquiredStock: selectedGpuCardModel.totalAcquiredStock
          } : {
            id: '',
            vendor: '',
            modelName: '',
            architecture: '',
            memoryGb: 0,
            totalAcquiredStock: 0
          }}
          isEditing={isEditing}
          onClose={() => setOpenForm(false)}
          onSave={async (gpuCardModelData: GpuCardModelFormData) => {
            try {
              const gpuCardModelDataToSend = {
                vendor: gpuCardModelData.vendor,
                modelName: gpuCardModelData.modelName,
                architecture: gpuCardModelData.architecture || null,
                memoryGb: gpuCardModelData.memoryGb,
                totalAcquiredStock: gpuCardModelData.totalAcquiredStock
              };
              if (isEditing && gpuCardModelData.id) {
                const updatedGpuCardModel = await updateGpuCardModel(gpuCardModelData.id, gpuCardModelDataToSend);
                if (updatedGpuCardModel && 'id' in updatedGpuCardModel) {
                  setGpuCardModels(gpuCardModels.map((gpuCardModel) => (gpuCardModel.id === updatedGpuCardModel.id ? {
                    id: updatedGpuCardModel.id,
                    vendor: updatedGpuCardModel.vendor,
                    modelName: updatedGpuCardModel.modelName,
                    architecture: updatedGpuCardModel.architecture ?? '',
                    memoryGb: updatedGpuCardModel.memoryGb,
                    totalAcquiredStock: updatedGpuCardModel.totalAcquiredStock
                  } : gpuCardModel)));
                }
              } else {
                const newGpuCardModel = await createGpuCardModel(gpuCardModelDataToSend);
                if (newGpuCardModel && 'id' in newGpuCardModel) {
                  setGpuCardModels([...gpuCardModels, {
                    id: newGpuCardModel.id,
                    vendor: newGpuCardModel.vendor,
                    modelName: newGpuCardModel.modelName,
                    architecture: newGpuCardModel.architecture ?? '',
                    memoryGb: newGpuCardModel.memoryGb,
                    totalAcquiredStock: newGpuCardModel.totalAcquiredStock
                  }]);
                }
              }
            } catch (error) {
              console.error('Error saving GpuCardModel:', error);
            }
            setOpenForm(false);
          }}
        />
      </Dialog>
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        resourceName={`${gpuCardModelToDelete?.vendor} ${gpuCardModelToDelete?.modelName}`}
      />
    </Box>
  );
};

export default GpuCardModelList;
