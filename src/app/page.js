import TemplateDefault from '@/templates/Default';
import { Box, Container} from '@mui/system';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/app/page.module.css";

export default function Home() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', mt: 16,position: 'relative'}}>
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box sx={{px:8, py:10, justifyContent:'center'}}>         

                        <Typography  component="h1" variant="h4" align='center' 
                            sx={{ 
                                color:'#000', 
                                py:5, 
                                fontFamily: 'var(--font-montserrat0',
                                position: 'relative',
                                fontWeight: 'bold',
                                }}>
                            We acquire, operate and grow the legacy of privately held companies in the Triangle region of North Carolina
                        </Typography>

                        <Typography  component="h6" variant="h6" align='center' 
                            sx={{
                            color:'#000',
                             pb:3, 
                             fontFamily: 'var(--font-montserrat)',
                             position: 'relative',
                             fontWeight: 'bold',
                            //  display: 'inline-block',
                            //  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo semi-transparente
                            //  backdropFilter: 'blur(5px)', // Desfoque do fundo
                            //  padding: '0.25px 0.25px', // Espaçamento interno
                            //  borderRadius: '10px', // Bordas arredondadas
                             }}>
                             “Maybe put a quote that one of you like as a way to show visitors who you are”
                        </Typography>

                    </Box>
                </Container>
            </Box>

            <Box sx={{bgcolor:'rgb(242, 244, 245)'}} position='relative'>
                <Container>
                    <Grid className={styles.center} container spacing ={6}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                mr:4,     
                                height: 'auto',
                                width: '100%',
                                }}
                                alt="The house from the offer."
                                src="/dustinportrait.jfif"
                                borderRadius="45px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h4" align='center' sx={{fontFamily: 'var(--font-montserrat)'}}>
                                    WHO WE ARE
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li" sx={{ml:10}} >
                                    <ListItemText primary = "We are dedicated entrepreneurs with a diverse background of professional experiences and a wide range of skills. Our commitment is to carry forward your legacy by:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:14}}>
                                    <ListItemText 
                                    primary = "• Ensuring a fair and mutually advantageous transaction"
                                    />
                                </ListItem>
                                <ListItem component="li" sx={{ml:14}}>
                                    <ListItemText primary = "• Taking a hands-on approach to immerse ourselves in your business"/>
                                </ListItem>
                                    <ListItem component="li"sx={{ml:14}}>
                                <ListItemText primary = "• Empowering your team to embrace new challenges and growth opportunities."/>
                                    </ListItem>
                                <ListItem component="li"sx={{ml:14}}>
                                    <ListItemText primary = "• Our mission is to respect the strong foundation you've established and steer your business towards future achievements.." 
                                    sx={{ fontFamily: 'var(--font-montserrat)' }}
                                    />
                                    
                                </ListItem>
                            
                            </List>
                        </Grid>
                    
                    </Grid>
                </Container>
            </Box>

            <Box sx={{bgcolor:'#ffffff',position: 'relative'}}>
            <Container maxWidth="lg">
                    <Grid className={styles.center} container spacing ={4}>

                    <Grid item xs={12} sm={6} >
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h4" align='center'>
                                    WHO YOU ARE
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li">
                                    <ListItemText primary = "Business owners that:"/>
                                </ListItem>
                                <ListItem component="li" sx={{mr:16}}>
                                    <ListItemText primary = "• Desire a successful continuity of their business"/>
                                </ListItem>

                                <ListItem component="li" sx={{mr:16}}>
                                    <ListItemText primary = "• Prioritize a smooth and transparent transition of ownership"/>
                                </ListItem>

                                <ListItem component="li"sx={{mr:16}}>
                                    <ListItemText primary = "• Want employees, customers, and suppliers well taken care of in the future"/>
                                </ListItem>

                                <ListItem component="li"sx={{mr:16}}>
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
                                ml:16,
                                }}
                                alt="The house from the offer."
                                src="/raleighbusiness.png"
                                borderRadius="25px"
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Box sx={{bgcolor:'rgb(242, 244, 245)', position: 'relative'}}>
                <Container maxWidth="lg">
                    <Grid className={styles.center} container spacing ={4}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                height: 'auto',
                                width: '100%',
                                mr:4,
                                }}
                                alt="The house from the offer."
                                src="/raleighbusiness2.png"
                                 borderRadius="25px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h4" align='center'>
                                    WHAT WE ARE SEEKING
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li" sx={{ml:10}}>
                                    <ListItemText primary = "We are looking for business that:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:14}}>
                                    <ListItemText primary = "• Are located in the Triangle region of North Carolina"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:14}}>
                                    <ListItemText primary = "• Operates in markets with long-term viability and growth opportunities"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:14}}>
                                    <ListItemText primary = "• Have management in place"/>
                                </ListItem>
                                    <ListItem component="li"sx={{ml:14}}>
                                <ListItemText primary = "• Have revenue between $3M to $15M"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:14}}>
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