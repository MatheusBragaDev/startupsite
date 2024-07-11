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
       <Box sx={{bgcolor:'#d3d3d3', py:2}}>

            <Container 
                maxWidth="lg" 
                component="footer" 
                sx={{
                    textAlign:'center', 
                }}
                >
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={4} sm={3}>
                        <Box sx={{my:1}}>
                            <Link 
                                href="/"
                                passHref 
                            >
                                <Typography 
                                    variant="body2" 
                                    sx={{
                                        color:'#000', 
                                        textDecoration:'none',
                                        fontSize: { xs: '0.75rem', sm: '1rem' },
                                        }}
                                >
                                    Home
                                </Typography> 
                            </Link> 
                        </Box>
                    </Grid>

                    <Grid item xs={4} sm={3}>
                        <Box sx={{my:1}}>
                            <Link 
                                href="/team"
                                passHref 
                            >
                                <Typography 
                                    variant="body2" 
                                    sx={{
                                        color:'#000', 
                                        textDecoration:'none',
                                        fontSize: { xs: '0.75rem', sm: '1rem' }
                                        }}
                                >
                                    Our team
                                </Typography> 
                            </Link> 
                        </Box>
                    </Grid>

                    <Grid item xs={4} sm={3}>
                        <Box sx={{my:1}}>
                            <Link 
                                href="/contactus"
                                passHref 
                            >
                                <Typography 
                                    variant="body2" 
                                    sx={{
                                        color:'#000', 
                                        textDecoration:'none',
                                        fontSize: { xs: '0.75rem', sm: '1rem' }
                                        }}
                                >
                                    Contact Us
                                </Typography> 
                            </Link> 
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{mt:2,  color:'#000'}}>
                    <Typography  
                        variant="body2"
                        sx={{ 
                            fontSize: { xs: '0.75rem', sm: '1rem' }
                        }}
                    >
                        © 2024 Vulcan Harbour Venture - All rights reserved
                    </Typography>
                </Box>
            </Container>
       </Box> 
    );
  };
  
