import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import './index.css';
import logo from '../../img/logo colorida.jpeg'
import { Link } from '@mui/material';

const drawerWidth = 240;

const Bottoes_navegacao = [
    {
        icon: <DashboardIcon/>,
        name: 'Dashboard',
        path: './dashboard'
    },
    {
        icon: <MeetingRoomIcon/>,
        name: 'Salas',
        path: './salas'
    },
    {
        icon: <CalendarMonthIcon/>,
        name: 'Eventos',
        path: './eventos'
    },    
    {
        icon: <PersonIcon/>,
        name: 'Usuários',
        path: './usuarios'
    }    

];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className='logo'>
            <img src={logo} alt='logo da Agii Booking' />
        </Toolbar>
        <Divider />
        <List>
            {Bottoes_navegacao.map((item, index) => (
            <Link href={item.path} underline="none" color="inherit">
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>      
                        {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
        </Box>
    </Box>
  );
}