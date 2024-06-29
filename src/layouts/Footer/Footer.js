import * as React from 'react';
import { 
    Container,
    Grid,
    Box,
    Typography,
} from '@mui/material';

import Link from 'next/link';

  export default function Footer () {

    return (
       <Box sx={{bgcolor:'#d3d3d3'}}>

       
      <Container 
        maxWidth="lg" 
        component="footer" 
        sx={{
            pt:3,
            pb:3, 
        }}
        >
        <Grid container spacing={3} >
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="/teste"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        color:'#000',
                        }}
                    >
                        <Typography variant="subtitle1">Home</Typography> 
                    </Link> 
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="/team"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        color:'#000',
                        }}
                    >
                        <Typography  variant="subtitle1">Our Team</Typography> 
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="#"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        color:'#000',
                        }}
                    >
                        <Typography  variant="subtitle1">Contact Us</Typography> 
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="#"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        color:'#000',
                        }}
                    >
                        <Typography  variant="subtitle1">Investments</Typography> 
                    </Link>
                </Box>
            </Grid>
        </Grid>
        <Box textAlign="center" sx={{mt:4,  color:'#000'}}>
            <Typography  variant="subtitle1">
                © 2024 Vulcan Harbour Venture - All rights reserved
            </Typography>
        </Box>
      </Container>
      </Box> 
    );
  };
  
