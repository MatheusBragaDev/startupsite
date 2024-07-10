'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team' },
  // { label: 'investments', href: '/portfolio' },-
  { label: 'Contact Us', href: '/contactus' },
];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} passHref>
            <ListItem ButtonBase>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{display:'flex'}}>

      <AppBar component="nav" sx={{ backgroundColor: '#fff', boxShadow: 1 }}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >

            <Link 
              href="/"
              passHref 
            >
              <IconButton disableRipple>    
                <Image
                  src="/logo1.png"
                  alt="Vulcan Harbour Venture Logo"
                  width={100} 
                  height={50}
                />
              </IconButton>
            </Link>
          </Typography>
          <Box 
          sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button  sx={{ color: '#000' }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml:'auto', display: { sm: 'none' }, color:'#000' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
