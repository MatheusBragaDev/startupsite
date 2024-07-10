import TemplateDefault from '@/templates/Default';
import {Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
// import styles from "@/app/page.module.css";

export default function Home() {
    return(
        <TemplateDefault>     
            <Box  sx={{ width: '100vw', mt: 8, position: 'relative'}}>
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box sx={{px:{xs: 2, sm:8}, py:{xs:5, sm: 10}, justifyContent:'center'}}>         

                        <Typography  component="h1" variant="h4" align='center' 
                            sx={{  
                                py: { xs: 2, sm: 5 }, 
                                fontSize: { xs: '1.5rem', sm: '2.125rem' },
                                fontFamily: 'var(--font-montserrat)',
                                position: 'relative',
                                fontWeight: 'bold',
                                }}
                        >
                            We acquire, operate and grow the legacy of privately held companies in the Triangle region of North Carolina
                        </Typography>

                        <Typography  
                            component="h6" 
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
                             “Maybe put a quote that one of you like as a way to show visitors who you are”
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box 
                sx={{
                    bgcolor:'rgb(242, 244, 245)', position:'relative',
                    py: { xs: 4, sm: 6 }, 
                }}
            >
                <Container>
                    <Grid container spacing ={6}>

                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                mr:{lg: 4},     
                                height: 'auto',
                                width: '100%',
                                borderRadius:"45px",
                                }}
                                alt="Dustin portrait"
                                src="/dustinportrait.jfif"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box 
                                sx={{
                                    textAlign:'center', 
                                    mb:4
                                }}
                            >
                                <Typography 
                                    component="h1" 
                                    variant="h4" 
                                    align='center' 
                                    sx={{
                                        fontFamily: 'var(--font-montserrat)',
                                        fontSize: { xs: '1.5rem', sm: '2.125rem' } 
                                    }}
                                >
                                    WHO WE ARE
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li" sx={{ml:{md:10}, align:'center', justifyContent:'center',}} >
                                    <ListItemText primary = "We are dedicated entrepreneurs with a diverse background of professional experiences and a wide range of skills. Our commitment is to carry forward your legacy by:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText 
                                    primary = "• Ensuring a fair and mutually advantageous transaction"
                                    />
                                </ListItem>
                                <ListItem component="li" sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Taking a hands-on approach to immerse ourselves in your business"/>
                                </ListItem>
                                    <ListItem component="li"sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                <ListItemText primary = "• Empowering your team to embrace new challenges and growth opportunities."/>
                                    </ListItem>
                                <ListItem component="li"sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Our mission is to respect the strong foundation you've established and steer your business towards future achievements." 
                                    sx={{ fontFamily: 'var(--font-montserrat)' }}
                                    />
                                    
                                </ListItem>
                            
                            </List>
                        </Grid>
                    
                    </Grid>
                </Container>
            </Box>

            <Box 
                sx={{
                    bgcolor:'#ffffff',
                    position: 'relative',
                    py: { xs: 4, sm: 6 },
                }}
            >
            <Container maxWidth="lg">
                    <Grid container spacing ={4}>

                    <Grid item xs={12} sm={6} >
                            <Box 
                                sx={{
                                    textAlign:'center', 
                                    mb:4,
                                }}
                            >
                                <Typography component="h1" variant="h4" align='center'sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                                    WHO YOU ARE
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li">
                                    <ListItemText primary = "Business owners that:"/>
                                </ListItem>
                                <ListItem component="li"sx={{mr:{md:16}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Desire a successful continuity of their business"/>
                                </ListItem>

                                <ListItem component="li"sx={{mr:{md:16}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Prioritize a smooth and transparent transition of ownership"/>
                                </ListItem>

                                <ListItem component="li"sx={{mr:{md:16}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Want employees, customers, and suppliers well taken care of in the future"/>
                                </ListItem>

                                <ListItem component="li"sx={{mr:{md:16}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Understand the purchase price isn't the only factor to be considered during the  transaction"/>
                                </ListItem>
                            
                            </List>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                height: 'auto',
                                width: '100%',
                                borderRadius:"25px",
                                ml:{md:10},
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
                    position: 'relative',
                    py: { xs: 4, sm: 6 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing ={4}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                height: 'auto',
                                width: '100%',
                                mr:4,
                                borderRadius:"25px",
                                }}
                                alt="WHAT WE ARE SEEKING"
                                src="/raleighbusiness2.png"
                                 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h4" align='center'sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                                    WHAT WE ARE SEEKING
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li" sx={{ml:{md:10}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "We are looking for business that:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Are located in the Triangle region of North Carolina"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Operates in markets with long-term viability and growth opportunities"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Have management in place"/>
                                </ListItem>
                                    <ListItem component="li"sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                <ListItemText primary = "• Have revenue between $3M to $15M"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:{md:14}, align:'center', justifyContent:'center'}}>
                                    <ListItemText primary = "• Have EBITDA greater than $500K"/>
                                </ListItem>
                            
                            </List>
                        </Grid>
                    
                    </Grid>
                </Container>
            </Box>
        </TemplateDefault>
    )
}