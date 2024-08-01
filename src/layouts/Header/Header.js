'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from '@mui/material/styles'


// Estilo responsivo para a imagem
const ResponsiveImage = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '80px', // Tamanho para telas pequenas
    height: '40px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '100px', // Tamanho para telas médias e grandes
    height: '50px',
  },
}));

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
            <ListItem buttonbase="true" sx={{ justifyContent: 'center' }}>
              {item.label === 'Contact Us' ? (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: 'rgb(184 56 47)',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgb(150 45 36)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <ListItemText primary={item.label} sx={{justifyContent: 'center',
                  position: 'relative', textAlign:'center'}}/>
              )}
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref>
              <IconButton disableRipple>    
                <ResponsiveImage
                  src="/logo1.jpg"
                  alt="Vulcan Harbor Ventures Logo"
                />
              </IconButton>
            </Link>

            <Link 
              href="/"
              passHref 
              >
            <Typography
              variant="h6"
              component="div"
              sx={{ color:'rgb(184 56 47)',ml: 2, display: { xs: 'none', sm: 'block' }, fontFamily: 'var(--font-montserrat)', fontWeight: 'bold',    fontSize: { xs: '0.8rem', sm: '1.05rem', md: '1.25rem', lg: '1.25rem' } }}
              >
              Vulcan Harbor Ventures
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                color:'rgb(184 56 47)',
                ml: 2,
                display: { xs: 'block', sm: 'none' },
                fontFamily: 'var(--font-montserrat)',
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem'},
              }}
            >
              Vulcan Harbor Ventures
            </Typography>
            </Link>
              </Box>
          <Box 
          sx={{ display: { xs: 'none', sm: 'block' } }}
          >
             {navItems.map((item) =>
              item.label === 'Contact Us' ? (
                <Link key={item.label} href={item.href} passHref>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: 'rgb(184 56 47)',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgb(150 45 36)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Link key={item.label} href={item.href} passHref>
                  <Button sx={{ color: '#000' }}>{item.label}</Button>
                </Link>
              )
            )}
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
