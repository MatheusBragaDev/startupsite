'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/teste' },
  { label: 'Team', href: '/team' },
  // { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact Us', href: '/contactus' },
];

function DrawerAppBar() {
  return (
      <AppBar component="nav" sx={{ backgroundColor: '#3a0101', boxShadow: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link 
              href="/teste"
              passHref 
              style={{ 
              color: 'inherit', 
              textDecoration: 'inherit',
                      }}>
              Vulcan Harbour Venture Logo
            </Link>
          </Typography>
          <Box 
          sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button  sx={{ color: '#fff' }}>
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
