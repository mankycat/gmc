import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Dialog } from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import ServerForm from '../components/ServerForm';
import DeleteConfirmationDialog from '../components/DeleteConfirmationDialog';
import { getServers, createServer, updateServer, deleteServer } from '../services/serverApiService';
import { useTranslation } from 'react-i18next';

interface Server {
  id: string;
  nameLabel: string;
  ipAddress: string;
  cpuModel: string;
  cpuCores: number;
  memoryGb: number;
  diskSpec: string;
  os: string;
  purpose: string;
}

const ServerList = () => {
  const [servers, setServers] = useState<Server[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serverToDelete, setServerToDelete] = useState<Server | null>(null);
  const { t } = useTranslation();

  const handleAddServer = () => {
    setIsEditing(true);
    setSelectedServer(null);
    setOpenForm(true);
  };

  const handleViewServer = (server: Server) => {
    setIsEditing(false);
    setSelectedServer(server);
    setOpenForm(true);
  };

  const handleEditServer = (server: Server) => {
    setIsEditing(true);
    setSelectedServer(server);
    setOpenForm(true);
  };

  const handleDeleteServer = (server: Server) => {
    setServerToDelete(server);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (serverToDelete) {
      try {
        await deleteServer(serverToDelete.id);
        setServers(servers.filter((server) => server.id !== serverToDelete.id));
      } catch (error) {
        console.error('Error deleting server:', error);
      }
    }
    setDeleteDialogOpen(false);
    setServerToDelete(null);
  };

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const data = await getServers();
        setServers(data as Server[]);
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    };
    fetchServers();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">{t('Server List')}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddServer}
          sx={{ height: 'fit-content' }}
        >
          {t('ADD SERVER')}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('ID')}</TableCell>
              <TableCell>{t('Name Label')}</TableCell>
              <TableCell>{t('IP Address')}</TableCell>
              <TableCell>{t('CPU Model')}</TableCell>
              <TableCell>{t('CPU Cores')}</TableCell>
              <TableCell>{t('Memory (GB)')}</TableCell>
              <TableCell>{t('Disk Spec')}</TableCell>
              <TableCell>{t('OS')}</TableCell>
              <TableCell>{t('Purpose')}</TableCell>
              <TableCell>{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">{t('No servers available')}</TableCell>
              </TableRow>
            ) : (
              servers.map((server) => (
                <TableRow key={server.id}>
                  <TableCell>{server.id}</TableCell>
                  <TableCell>{server.nameLabel}</TableCell>
                  <TableCell>{server.ipAddress}</TableCell>
                  <TableCell>{server.cpuModel}</TableCell>
                  <TableCell>{server.cpuCores}</TableCell>
                  <TableCell>{server.memoryGb}</TableCell>
                  <TableCell>{server.diskSpec}</TableCell>
                  <TableCell>{server.os}</TableCell>
                  <TableCell>{server.purpose}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleViewServer(server)}><Visibility /></IconButton>
                    <IconButton onClick={() => handleEditServer(server)}><Edit /></IconButton>
                    <IconButton onClick={() => handleDeleteServer(server)}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openForm} onClose={() => setOpenForm(false)} fullWidth maxWidth="md">
        <ServerForm
          server={selectedServer ?? undefined}
          isEditing={isEditing}
          onClose={() => setOpenForm(false)}
          onSave={async (serverData) => {
            try {
              if (isEditing && serverData.id) {
                const updatedServer = await updateServer(serverData.id, serverData);
                setServers(servers.map((server) => (server.id === (updatedServer as Server).id ? updatedServer as Server : server)));
              } else {
                const newServer = await createServer({ ...serverData, userId: localStorage.getItem('userId') || 'unknown_user' });
                setServers([...servers, newServer as Server]);
              }
            } catch (error) {
              console.error('Error saving server:', error);
            }
            setOpenForm(false);
          }}
        />
      </Dialog>
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        resourceName={serverToDelete?.nameLabel || ''}
      />
    </Box>
  );
};

export default ServerList;
