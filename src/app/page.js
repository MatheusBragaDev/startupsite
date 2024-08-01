/* eslint-disable react/no-unescaped-entities */
import TemplateDefault from '@/templates/Default';
import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import { Stack } from '@mui/system';

export default function Home() {
    return (
        <TemplateDefault>

            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    mt: {xs:5,sm:8,md:8,lg:8,xl:8},
                    position: 'relative',
                    overflow: 'hidden',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <BackgroundImage />
                <Container maxWidth="lg" sx={{ position: 'relative', height: '100%', display:'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box
                        sx={{
                            width: '100%',
                            pt:{xs:5,sm:2,md:3,lg:4,xl:5},
                            mt:{xs:5,sm:8,md:8,lg:8, xl:2},
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h1"
                            align='center'
                            sx={{
                                fontSize: { xs: '1.35rem', sm: '1.35rem', md:'1.8rem', lg:'2rem', xl:'2.1rem' },
                                fontWeight: 'bold'
                            }}
                        >
                            We acquire, operate, grow, and continue the legacy of privately held businesses in the Triangle region of North Carolina
                        </Typography>
                    </Box>

                    <Box sx ={{flexGrow:1}}/>

                    <Box
                        sx={{
                            width: '100%',
                            textAlign: 'center',
                            pb:3,
                        }}
                    >
                        <Typography
                            component="h2"
                            variant="h6"
                            align='center'
                            sx={{
                                color: '#F5F5F5',
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                fontFamily: 'var(--font-montserrat)',
                                position: 'relative',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                mb:0.5,
                            }}
                        >
                            “The secret of success lies not in doing your own work, but in recognizing the right person to do it.”
                        </Typography>

                        <Typography
                            variant="h6"
                            align='center'
                            sx={{
                                color: '#F5F5F5',
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                fontFamily: 'var(--font-montserrat)',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                            }}>
                            Andrew Carnegie
                        </Typography>

                    </Box>
                </Container>
            </Box>

            <Box
                sx={{
                    bgcolor: 'rgb(242, 244, 245)',
                    position: 'relative',
                    py: { xs: 4, sm: 6 },
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 2, md:0,lg: 0 }}
                        alignItems="center"
                        sx={{ height: '100%' }}
                    >

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2, md:1, lg: 1 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                            <Box
                                component="img"
                                sx={{
                                    height: { xs: '300px', sm: '300px', md: '370px',lg: 'auto' },
                                    maxWidth: { xs: '300px', sm: '300px', md:'370px', lg:'auto' },
                                    borderRadius: "25px",
                                }}
                                alt="Dustin portrait"
                                src="/dustinportrait.jpg"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1, md:2, lg: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Stack
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',

                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                    
                                        mb: { xs: 1, sm: 2 },

                                    }}
                                >
                                    WHO WE ARE
                                </Typography>

                                <Stack
                                    spacing={2}
                                    sx={{                                   
                                        width: '100%',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            
                                            fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.12rem' },
                                        }}
                                    >
                                        We are dedicated and driven entrepreneurs with a diverse background of professional experiences and a wide range of skills. Our commitment is to continue the legacy that you have built by:
                                    </Typography>

                                    <Typography component="ul" sx={{ pl: 5,  fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' } }}>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Ensuring a fair and mutually beneficial transaction
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Taking a hands-on approach to immerse ourselves in your business
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Empowering your team to embrace new challenges and growth opportunities
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Respecting the strong foundation you've established with  your employees and customers and steering your business towards future achievements
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
                    bgcolor: '#fff',
                    position: 'relative',
                    py: { xs: 4, sm: 6 },
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 6, lg: 10 }}
                        alignItems="center"
                        sx={{ height: '100%' }}
                    >

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Stack
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                    
                                        mb: { xs: 1, sm: 2 },

                                    }}
                                >
                                    WHO YOU ARE
                                </Typography>

                                <Stack
                                    spacing={2}
                                    sx={{

                                        textAlign: 'left',
                                    
                                        width: '100%',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            
                                            fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.12rem' },
                                        }}
                                    >
                                        Business Owners that:
                                    </Typography>

                                    <Typography component="ul" sx={{ pl: 5,  fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' } }}>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Seek to preserve the legacy of their business
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Prioritize a smooth and transparent transition of ownership
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Want your employees, customers, and suppliers well taken care of under new management
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Understand the purchase price isn't the only factor to be considered during the transaction
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>


                        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                sx={{
                                    height: { xs: '300px', sm: '300px', lg: 'auto' },
                                    width: { xs: '100%', sm: '100%' },
                                    objectFit:'cover',
                                    borderRadius: "25px",
                                }}
                                alt="WHO YOU ARE PICTURE"
                                src="/BoomerBizOwnerResize.jpg"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box
                sx={{
                    bgcolor: 'rgb(242, 244, 245)',
                    position: 'relative',
                    py: { xs: 4, sm: 6 },
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 3, sm: 6, lg: 10 }} alignItems="center" sx={{ height: '100%' }}>

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2, lg: 1 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                sx={{
                                    height: { xs: '300px', sm: '300px', lg: 'auto' },
                                    width: { xs: '100%', sm: '100%' },
                                    borderRadius: "25px",
                                }}
                                alt="WHAT WE ARE SEEKING"
                                src="/HandShakeDeal.jpg"

                            />
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1, lg: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Stack
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                }}
                            >

                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                    
                                        mb: { xs: 1, sm: 2 },
                                    }}
                                >
                                    WHAT WE ARE SEEKING
                                </Typography>

                                <Stack
                                    spacing={2}
                                    sx={{
                                        textAlign: 'left',
                                    
                                        width: '100%',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            
                                            fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.12rem' },
                                        }}
                                    >
                                       We are looking for businesses that:
                                    </Typography>

                                    <Typography component="ul" sx={{ pl: 5,  fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' } }}>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Are located in the Triangle region of North Carolina
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Operate in markets with long-term viability and growth opportunities
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Have management in place
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                            Have revenue between $3M to $15M
                                        </Typography>
                                        <Typography component="li" variant="body2" sx={{ display: 'list-item', fontSize: 'inherit' }}>
                                        Have cash flow greater than $500k
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