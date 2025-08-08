import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { getVirtualMachine } from '../services/vmApiService';
import cardUsageApiService from '../services/cardUsageApiService';
import { getServer } from '../services/serverApiService';
const { getCardUsagesByVirtualMachineId } = cardUsageApiService;
import { useTranslation } from 'react-i18next';

interface VirtualMachine {
  id: string;
  nameLabel: string;
  vcpuCoresAssigned: number;
  ramGbAssigned: number;
  gpuResourceSlice?: string;
  purpose?: string;
  assignedToUserEmail?: string;
  internalIpAddress?: string;
  notes?: string;
  hostServerId: string;
  hostServer?: {
    nameLabel: string;
    ipAddress: string;
  };
  assignedGpuCardId?: string;
  cardUsages?: CardUsage[];
}

interface CardUsage {
  id: string;
  cardIndex: number;
  cardUuid: string;
  usage?: string;
}

const VmDetailPage = () => {
  const { id } = useParams();
  const [vm, setVm] = useState<VirtualMachine | null>(null);
  const [cardUsages, setCardUsages] = useState<CardUsage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchVmAndCardUsages = async () => {
      try {
        if (id) {
          const vmResponse = await getVirtualMachine(id);
          if (isApiResponse(vmResponse)) {
            const vmData = vmResponse.data;
            const hostServerResponse = await getServer(vmData.hostServerId);
            if (isApiResponse(hostServerResponse)) {
              const hostServerData = hostServerResponse.data;
              setVm({ ...vmData, hostServer: hostServerData });
            }
            const cardUsagesResponse = await getCardUsagesByVirtualMachineId(id);
            if (isApiResponse(cardUsagesResponse)) {
              const cardUsagesData = cardUsagesResponse.data;
              setCardUsages(cardUsagesData);
            }
          }
        }
      } catch (err) {
        setError(t('Failed to fetch virtual machine or card usages'));
        console.error('Error fetching VM or card usages:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVmAndCardUsages();
  }, [id]);

  if (loading) {
    return <Typography>{t('Loading...')}</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!vm) {
    return <Typography>{t('Virtual machine not found.')}</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{t('Virtual Machine Detail')}</Typography>
      <Typography><strong>{t('ID')}:</strong> {vm.id}</Typography>
      <Typography><strong>{t('Name Label')}:</strong> {vm.nameLabel}</Typography>
      <Typography><strong>{t('vCPU Cores Assigned')}:</strong> {vm.vcpuCoresAssigned}</Typography>
      <Typography><strong>{t('RAM (GB) Assigned')}:</strong> {vm.ramGbAssigned}</Typography>
      {vm.gpuResourceSlice && <Typography><strong>{t('GPU Resource Slice')}:</strong> {vm.gpuResourceSlice}</Typography>}
      {vm.purpose && <Typography><strong>{t('Purpose')}:</strong> {vm.purpose}</Typography>}
      {vm.assignedToUserEmail && <Typography><strong>{t('Assigned To')}:</strong> {vm.assignedToUserEmail}</Typography>}
      {vm.internalIpAddress && <Typography><strong>{t('Internal IP')}:</strong> {vm.internalIpAddress}</Typography>}
      {vm.notes && <Typography><strong>{t('Notes')}:</strong> {vm.notes}</Typography>}
      <Typography><strong>{t('Host Server ID')}:</strong> {vm.hostServerId}</Typography>
      {vm.assignedGpuCardId && <Typography><strong>{t('Assigned GPU Card ID')}:</strong> {vm.assignedGpuCardId}</Typography>}

      <Typography variant="h6" sx={{ marginTop: 2 }}>{t('Card Usages')}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('ID')}</TableCell>
              <TableCell>{t('Card Index')}</TableCell>
              <TableCell>{t('Card UUID')}</TableCell>
              <TableCell>{t('Usage')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cardUsages.map((cardUsage) => (
              <TableRow key={cardUsage.id}>
                <TableCell>{cardUsage.id}</TableCell>
                <TableCell>{cardUsage.cardIndex}</TableCell>
                <TableCell>{cardUsage.cardUuid}</TableCell>
                <TableCell>{cardUsage.usage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const isApiResponse = (response: any): response is { data: any } => {
  return response && typeof response === 'object' && 'data' in response;
};

export default VmDetailPage;
