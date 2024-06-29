import TemplateDefault from '@/templates/Default';
import { Box, Container} from '@mui/system';
import { Card, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/app/page.module.css";

export default function Teste() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', margin: 0,position: 'relative' }}>
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box sx={{px:8, py:10, justifyContent:'center'}}>                    
                        <Typography  component="h1" variant="h2" align='center' sx={{color:'#8B0000', py:5}}>
                            We acquire, operate and grow the legacy of privately held companies in the Triangle region of North Carolina
                        </Typography>
                        <Typography  component="h4" variant="h4" align='center' sx={{color:'#8B0000', py:5}}>
                             “Maybe put a quote that one of you like as a way to show visitors who you are”
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box sx={{bgcolor:'rgb(242, 244, 245)'}} position='relative'>
                <Container maxWidth="lg">
                    <Grid className={styles.center} container spacing ={4}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                height: 'auto',
                                width: '100%',
                                }}
                                alt="The house from the offer."
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h4" align='center'>
                                    WHO WE ARE
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li">
                                    <ListItemText primary = "We are passionate entrepreneurs with diverse professional experiences and a wide range of skills, committed to continuing your legacy by:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:4}}>
                                    <ListItemText primary = "• Using a hands-on approach to learn your business"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:4}}>
                                <ListItemText primary = "• Empowering your team to meet new challenges and growth opportunities"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:4}}>
                                <ListItemText primary = "• Xxxxx"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:4}}>
                                <ListItemText primary = "• Our goal is to honor the foundation you´ve built while guiding your business to     future success."/>
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
                                <ListItem component="li" sx={{mx:4}}>
                                    <ListItemText primary = "• Desire a sucessfull continuity of their business"/>
                                </ListItem>
                                <ListItem component="li" sx={{mx:4}}>
                                <ListItemText primary = "• Prioritize a smooth and transparent transition of ownership"/>
                                </ListItem>
                                <ListItem component="li"sx={{mx:4}}>
                                <ListItemText primary = "• Want employers, customers and suppliers well taken care of in the future"/>
                                </ListItem>
                                <ListItem component="li"sx={{mx:4}}>
                                <ListItemText primary = "• Understand the purchase price isn´t the only fator to be considerated during the transaction"/>
                                </ListItem>
                            
                            </List>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                sx={{
                                height: 'auto',
                                width: '100%',
                                }}
                                alt="The house from the offer."
                                src="/raleighbusiness.png"
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
                                }}
                                alt="The house from the offer."
                                src="/raleighbusiness2.png"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h4" align='center'>
                                    WHAT WE ARE SEEKING
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li">
                                    <ListItemText primary = "We are looking for business that:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:4}}>
                                    <ListItemText primary = "• Are located in the Triangle region of North Carolina"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:4}}>
                                    <ListItemText primary = "• Operates in markets with long-term viability and growth opportunities"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:4}}>
                                    <ListItemText primary = "• Excel in management"/>
                                </ListItem>
                                    <ListItem component="li"sx={{ml:4}}>
                                <ListItemText primary = "• Have revenue between $3M to $15M"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:4}}>
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