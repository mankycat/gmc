import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

interface CardUsage {
  id: string;
  cardIndex: number;
  cardUuid: string;
  usage?: string;
}

interface CardUsageSubTableProps {
  cardUsages: CardUsage[];
}

const CardUsageSubTable: React.FC<CardUsageSubTableProps> = ({ cardUsages }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Card Index</TableCell>
            <TableCell>Card UUID</TableCell>
            <TableCell>Usage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardUsages.map((cardUsage) => (
            <TableRow key={cardUsage.id}>
              <TableCell>{cardUsage.cardIndex}</TableCell>
              <TableCell>{cardUsage.cardUuid}</TableCell>
              <TableCell>{cardUsage.usage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CardUsageSubTable;
