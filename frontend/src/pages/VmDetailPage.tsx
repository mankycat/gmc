import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { getVirtualMachine } from '../services/vmApiService';
import cardUsageApiService from '../services/cardUsageApiService';
import { getServer } from '../services/serverApiService';
const { getCardUsagesByVirtualMachineId } = cardUsageApiService;

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
        setError('Failed to fetch virtual machine or card usages');
        console.error('Error fetching VM or card usages:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVmAndCardUsages();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!vm) {
    return <Typography>Virtual machine not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">Virtual Machine Detail</Typography>
      <Typography><strong>ID:</strong> {vm.id}</Typography>
      <Typography><strong>Name Label:</strong> {vm.nameLabel}</Typography>
      <Typography><strong>vCPU Cores Assigned:</strong> {vm.vcpuCoresAssigned}</Typography>
      <Typography><strong>RAM (GB) Assigned:</strong> {vm.ramGbAssigned}</Typography>
      {vm.gpuResourceSlice && <Typography><strong>GPU Resource Slice:</strong> {vm.gpuResourceSlice}</Typography>}
      {vm.purpose && <Typography><strong>Purpose:</strong> {vm.purpose}</Typography>}
      {vm.assignedToUserEmail && <Typography><strong>Assigned To:</strong> {vm.assignedToUserEmail}</Typography>}
      {vm.internalIpAddress && <Typography><strong>Internal IP:</strong> {vm.internalIpAddress}</Typography>}
      {vm.notes && <Typography><strong>Notes:</strong> {vm.notes}</Typography>}
      <Typography><strong>Host Server ID:</strong> {vm.hostServerId}</Typography>
      {vm.assignedGpuCardId && <Typography><strong>Assigned GPU Card ID:</strong> {vm.assignedGpuCardId}</Typography>}

      <Typography variant="h6" sx={{ marginTop: 2 }}>Card Usages</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Card Index</TableCell>
              <TableCell>Card UUID</TableCell>
              <TableCell>Usage</TableCell>
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
