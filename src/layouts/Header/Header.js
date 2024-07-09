'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import { IconButton } from '@mui/material';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team' },
  // { label: 'investments', href: '/portfolio' },-
  { label: 'Contact Us', href: '/contactus' },
];

function DrawerAppBar() {
  return (
      <AppBar component="nav" sx={{ backgroundColor: '#fff', boxShadow: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link 
              href="/"
              passHref 
            >
              <IconButton sx={{py:'20px'}} disableRipple>
                
                <Image
                  src="/logo.png" // Substitua pelo caminho real da sua imagem
                  alt="Vulcan Harbour Venture Logo"
                  width={300} // Ajuste o tamanho conforme necessário
                  height={100}
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
        </Toolbar>
      </AppBar>
  );
}

export default DrawerAppBar;
