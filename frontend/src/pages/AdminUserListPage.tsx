import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { listUsers, createAdminUser, updateAdminUser } from '../services/userApiService';
import AdminUserForm from '../components/AdminUserForm';

interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

type AdminUserFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
  isAdmin: boolean;
};

const AdminUserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await listUsers() as User[];
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSave = async (formData: AdminUserFormData) => {
    try {
      if (editingUserId) {
        // Update existing user
        const updatedUser = await updateAdminUser(editingUserId, formData) as User;
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
      } else {
        // Create new user
        const newUser = await createAdminUser(formData) as User;
        setUsers([...users, newUser]);
      }
    } catch (error) {
      console.error('Error saving admin user:', error);
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUserId(user.id);
    setOpenAddUserDialog(true);
  };

  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
    setEditingUserId(null);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">Admin Users</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setOpenAddUserDialog(true)}
          sx={{ height: 'fit-content' }}
        >
          ADD USER
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>isAdmin</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditUser(user)}><Edit /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddUserDialog} onClose={() => setOpenAddUserDialog(false)} maxWidth="md" fullWidth>
        <DialogContent>
          <AdminUserForm 
            user={editingUserId ? {
              email: users.find(user => user.id === editingUserId)?.email || '',
              password: '',
              isAdmin: users.find(user => user.id === editingUserId)?.isAdmin || false,
            } : undefined} 
            isEditing={!!editingUserId}
            onClose={handleCloseAddUserDialog} 
            onSave={handleSave}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AdminUserListPage;
