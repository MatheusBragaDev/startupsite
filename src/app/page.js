/* eslint-disable react/no-unescaped-entities */
import TemplateDefault from '@/templates/Default';
import {Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import { Stack } from '@mui/system';
// import styles from "@/app/page.module.css";

export default function Home() {
    return(
        <TemplateDefault>     

            <Box  
                sx={{ 
                    width: '100vw', 
                    height:'100vh',
                    display:'flex',
                    mt: 8, 
                    position: 'relative',
                    overflow:'hidden',
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box sx={{px:{xs: 2, sm:8}, py:{xs:5, sm: 10}, justifyContent:'center', textAlign:'center'}}>         
                        <Typography  
                            component="h1" 
                            variant="h1" 
                            align='center' 
                            sx={{  
                                py: { xs: 2, sm: 5 }, 
                                fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                fontFamily: 'var(--font-montserrat)',
                                fontWeight: 'bold',
                                }}
                        >
                            We acquire, operate and grow the legacy of privately held companies in the Triangle region of North Carolina
                        </Typography>

                        <Typography  
                            component="h2" 
                            variant="h6" 
                            align='center' 
                            sx={{
                                color:'#000',
                                pb: { xs: 2, sm: 3 },
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                fontFamily: 'var(--font-montserrat)',
                                position: 'relative',
                                fontWeight: 'bold',
                             }}
                        >
                             “The secret of success lies not in doing your own work, but in recognizing the right person to do it.”
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box 
                sx={{
                    bgcolor:'rgb(242, 244, 245)', 
                    position:'relative',
                    py: { xs: 4, sm: 6 }, 
                    minHeight:'100vh',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                }}
            >
                <Container maxWidth="lg">
                    <Grid 
                        container 
                        spacing ={{xs:2,sm:6,lg:10}} 
                        alignItems="center"
                        sx={{height:'100%'}}
                    >

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2, lg:1}, display:'flex', flexDirection:'column', justifyContent:'center' }}>
                            <Box
                                component="img"
                                sx={{     
                                height: {xs:'auto', sm:'auto', lg:'auto'},
                                maxWidth: { xs: '100%', sm: '100%' },
                                borderRadius:"25px",
                                }}
                                alt="Dustin portrait"
                                src="/dustinportrait.jfif"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1, lg:2}, display:'flex', flexDirection:'column', justifyContent:'center'  }}>
                            <Stack 
                                spacing={2}
                                sx={{
                                    display:'flex', 
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:'100%',
                                    
                                }}
                            >
                                <Typography 
                                    variant="h4"   
                                    sx={{
                                        textAlign:"center",
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: { xs: '1.5rem', sm: '2.125rem'},
                                        color:"#333",
                                        mb:1,
                                        
                                    }}
                                >
                                    WHO WE ARE
                                </Typography>
                            
                                <Stack
                                    spacing={2}
                                    sx={{
                                    
                                    textAlign: 'left',
                                    color: '#555',
                                    width: '100%', 
                                  }}
                                >   
                                <Typography variant='h6'>
                                    We are dedicated entrepreneurs with a diverse background of professional experiences and a wide range of skills. Our commitment is to carry forward your legacy by:
                                </Typography>

                                <Typography component="ul" sx={{ pl: 2}}>
                                    <Typography component="li" variant='h6'>
                                        Ensuring a fair and mutually advantageous transaction
                                    </Typography>
                                    <Typography component="li" variant='h6'>
                                        Taking a hands-on approach to immerse ourselves in your business
                                    </Typography>
                                    <Typography component="li" variant='h6'>
                                        Empowering your team to embrace new challenges and growth opportunities
                                    </Typography>
                                    <Typography component="li" variant='h6'>
                                        Our mission is to respect the strong foundation you've established and steer your business towards future achievements
                                    </Typography>
                                </Typography> 
                                </Stack>                           
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box 
                sx={{
                    bgcolor:'#fff', 
                    position:'relative',
                    py: { xs: 4, sm: 6 }, 
                    minHeight:'100vh',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                }}
            >
            <Container maxWidth="lg">
                    <Grid 
                        container 
                        spacing ={{xs:2,sm:6,lg:10}} 
                        alignItems="center"
                        sx={{height:'100%'}}
                    >

                    <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 }, display:'flex', flexDirection:'column', justifyContent:'center' }}>
                            <Stack
                              spacing={2}
                              sx={{
                                  display:'flex', 
                                  alignItems:'center',
                                  justifyContent:'center',
                                  height:'100%',
                              }}
                            >
                                <Typography 
                                variant="h4"  
                                sx={{
                                    textAlign:"center",
                                    fontFamily: 'var(--font-montserrat)',
                                    fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                    color:"#333",
                                    mb:1,
                                }}
                                >
                                    WHO YOU ARE
                                </Typography>

                                <Stack
                                    spacing={2}
                                    sx={{
                                    
                                    textAlign: 'left',
                                    color: '#555',
                                    width: '100%', 
                                  }}
                                >
                                <Typography variant='h6'>
                                    Business owners that:
                                </Typography>

                                <Typography component="ul" sx={{ pl: 2}}>
                                    <Typography component="li" variant='h6'>
                                     Desire a successful continuity of their business
                                    </Typography>
                                    <Typography component="li" variant='h6'>
                                    Prioritize a smooth and transparent transition of ownership
                                    </Typography>
                                    <Typography component="li" variant='h6'>
                                    Want employees, customers, and suppliers well taken care of in the future
                                    </Typography>
                                    <Typography component="li" variant='h6'>
                                    Understand the purchase price isn't the only factor to be considered during the  transaction
                                    </Typography>
                                </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2 }, display:'flex',flexDirection:'column', justifyContent:'center' }}>
                            <Box
                                component="img"
                                sx={{
                                height:{xs:'auto', sm:'auto', lg:'auto'},
                                width: { xs: '100%', sm: '100%' },
                                borderRadius:"25px",
                            }}
                                alt="WHO YOU ARE PICTURE"
                                src="/raleighbusiness.png"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box 
                sx={{
                    bgcolor:'rgb(242, 244, 245)', 
                    position:'relative',
                    py: { xs: 4, sm: 6 }, 
                    minHeight:'100vh',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing ={{xs:3,sm:6,lg:10}} alignItems="center" sx={{height:'100%'}}>

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2, lg:1 }, display:'flex', flexDirection:'column', justifyContent:'center' }}>
                            <Box
                                component="img"
                                sx={{
                                height:  {xs:'auto', sm:'auto', lg:'auto'},
                                width:  { xs: '100%', sm: '100%' },
                                borderRadius:"25px",
                                }}
                                alt="WHAT WE ARE SEEKING"
                                src="/raleighbusiness2.png"
                                 
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1, lg:2 }, display:'flex', flexDirection:'column', justifyContent:'center' }}>
                            <Stack
                                spacing={2}
                                sx={{
                                display:'flex', 
                                alignItems:'center',
                                justifyContent:'center',
                                height:'100%',
                                }}
                            >
                                
                                <Typography 
                                    variant="h4"   
                                    sx={{
                                        textAlign:"center",
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                        color:"#333",
                                        mb:1,
                                    }}
                                >
                                    WHAT WE ARE SEEKING
                                </Typography>
                                    
                                <Stack
                                    spacing={2}
                                    sx={{
                                        textAlign: 'left',
                                        color: '#555',
                                        width: '100%', 
                                    }}
                                >
                                    <Typography 
                                        variant='h6'
                                    >
                                        We are looking for business that:
                                    </Typography>

                                    <Typography component="ul" sx={{ pl: 2}}>
                                        <Typography component="li" variant='h6'>
                                        Are located in the Triangle region of North Carolina
                                        </Typography>
                                        <Typography component="li" variant='h6'>
                                        Operates in markets with long-term viability and growth opportunities
                                        </Typography>
                                        <Typography component="li" variant='h6'>
                                        Have management in place
                                        </Typography>
                                        <Typography component="li" variant='h6'>
                                        Have revenue between $3M to $15M
                                        </Typography>
                                        <Typography component="li" variant='h6'>
                                        Have EBITDA greater than $500K
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </TemplateDefault>
    )
}