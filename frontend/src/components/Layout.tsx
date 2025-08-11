import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Collapse,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const drawerWidth = 240;

const Layout = () => {
  const { t } = useTranslation();
  const [gpuOpen, setGpuOpen] = React.useState(false);
  const [svmOpen, setSvmOpen] = React.useState(false);

  const handleGpuClick = () => {
    setGpuOpen(!gpuOpen);
  };

  const handleSvmClick = () => {
    setSvmOpen(!svmOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {t('GPU Management Console')}
          </Typography>
          <LanguageSwitcher />
          <Button color="inherit" startIcon={<LogoutIcon />} component={Link} to="/login">
            {t('Logout')}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/users">
                <ListItemText primary={t('Admin Users')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleGpuClick}>
                <ListItemText primary={t('GPU Card')} />
                {gpuOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={gpuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/gpu-card-models">
                    <ListItemText primary={t('GPU Card Models')} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/gpu-card-instances">
                    <ListItemText primary={t('GPU Card Instances')} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ListItemButton onClick={handleSvmClick}>
                <ListItemText primary={t('Servers & VMs')} />
                {svmOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={svmOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/">
                    <ListItemText primary={t('Servers')} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/vms">
                    <ListItemText primary={t('Virtual Machines')} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
