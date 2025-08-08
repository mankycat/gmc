import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  CircularProgress, 
  Box, 
  Pagination, 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { listVirtualMachines, deleteVirtualMachine, createVirtualMachine } from '../services/vmApiService';
import VmForm from '../components/VmForm';
import CardUsageSubTable from '../components/CardUsageSubTable';
import { useTranslation } from 'react-i18next';

interface VirtualMachine {
  id: string;
  nameLabel: string;
  internalIpAddress: string;
  purpose: string;
  hostServer: {
    nameLabel: string;
    ipAddress: string;
  };
  hostServerId: string;
  ramGbAssigned: number;
  gpuResourceSlice: string;
  vcpuCoresAssigned: number;
  userId: string;
  notes: string;
  assignedToUserEmail: string;
  assignedGpuCardId: string;
  cardUsages?: CardUsage[];
}

interface CardUsage {
  id: string;
  cardIndex: number;
  cardUuid: string;
  usage?: string;
}

const VmListPage = () => {
  const [vms, setVms] = useState<VirtualMachine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [openAddVmDialog, setOpenAddVmDialog] = useState(false);
  const [editingVmId, setEditingVmId] = useState<string | null>(null);
  const [newVm, setNewVm] = useState({
    nameLabel: '',
    vcpuCoresAssigned: 0,
    ramGbAssigned: 0,
    gpuResourceSlice: '',
    purpose: '',
    assignedToUserEmail: '',
    internalIpAddress: '',
    notes: '',
    hostServerId: '',
    assignedGpuCardId: '',
    userId: ''
  });
  const { t } = useTranslation();

  const fetchVms = async () => {
    try {
      const limit = 10;
      const data = await listVirtualMachines(page, limit);
      const vmData = data as { virtualMachines: VirtualMachine[], totalCount: number };
      setVms(vmData.virtualMachines);
      setTotalPages(Math.ceil(vmData.totalCount / limit));
    } catch (err) {
      setError(t('Failed to fetch virtual machines'));
      console.error('Error fetching VMs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVms();
  }, [page]);

  const handleDeleteVm = async (vm: VirtualMachine) => {
    try {
      await deleteVirtualMachine(vm.id);
      setVms(vms.filter((v) => v.id !== vm.id));
    } catch (err) {
      setError(t('Failed to delete virtual machine'));
      console.error('Error deleting VM:', err);
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setLoading(true);
  };

  const handleCreateVm = async (vmData: any) => {
    try {
      await createVirtualMachine(vmData);
      await fetchVms(); // Refresh the list after creation
    } catch (error) {
      setLoading(false);
      console.error('Error creating VM:', error);
    }
  };

  const handleEditVm = (vm: VirtualMachine) => {
    setEditingVmId(vm.id);
    setNewVm({
      nameLabel: vm.nameLabel,
      vcpuCoresAssigned: vm.vcpuCoresAssigned,
      ramGbAssigned: vm.ramGbAssigned,
      gpuResourceSlice: vm.gpuResourceSlice,
      purpose: vm.purpose,
      internalIpAddress: vm.internalIpAddress,
      hostServerId: vm.hostServerId,
      userId: vm.userId,
      notes: vm.notes,
      assignedToUserEmail: vm.assignedToUserEmail,
      assignedGpuCardId: vm.assignedGpuCardId,
    });
    setOpenAddVmDialog(true);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          {t('Virtual Machines')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenAddVmDialog(true)}
          sx={{ height: 'fit-content' }}
        >
          {t('ADD VIRTUAL MACHINE')}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('ID')}</TableCell>
              <TableCell>{t('VM Name')}</TableCell>
              <TableCell>{t('Internal IP')}</TableCell>
              <TableCell>{t('Purpose')}</TableCell>
              <TableCell>{t('Host Server Name')}</TableCell>
              <TableCell>{t('Host Server IP')}</TableCell>
              <TableCell>{t('VM RAM (GB)')}</TableCell>
              <TableCell>{t('GPU Resources')}</TableCell>
              <TableCell>{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vms.length > 0 ? (
              vms.map((vm) => (
                <TableRow key={vm.id}>
                  <TableCell>{vm.id}</TableCell>
                  <TableCell>{vm.nameLabel}</TableCell>
                  <TableCell>{vm.internalIpAddress}</TableCell>
                  <TableCell>{vm.purpose}</TableCell>
                  <TableCell>{vm.hostServer.nameLabel}</TableCell>
                  <TableCell>{vm.hostServer.ipAddress}</TableCell>
                  <TableCell>{vm.ramGbAssigned}</TableCell>
                  <TableCell>
                    {vm.cardUsages && vm.cardUsages.length > 0 ? (
                      <CardUsageSubTable cardUsages={vm.cardUsages} />
                    ) : (
                      t('No GPU Resources')
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditVm(vm)}><Edit /></IconButton>
                    <IconButton onClick={() => handleDeleteVm(vm)}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center">{t('No virtual machines found.')}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      <Dialog 
        open={openAddVmDialog} 
        onClose={async (_, reason) => {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            setOpenAddVmDialog(false);
            setEditingVmId(null);
          }
        }} 
        maxWidth="md" 
        fullWidth
      >
        <DialogContent>
        <VmForm 
          key={editingVmId || 'new'} 
          vm={editingVmId ? vms.find(vm => vm.id === editingVmId) : undefined} 
          isEditing={!!editingVmId}
          onClose={async (refresh) => {
            setOpenAddVmDialog(false);
            setEditingVmId(null);
            if (refresh) {
              await fetchVms();
            }
          }} 
        />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default VmListPage;
