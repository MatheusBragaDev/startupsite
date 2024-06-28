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
                        <Typography  component="h1" variant="h2" align='center' sx={{py:5}}>
                            We acquire, operate and grow the legacy of privately held companies in the Triangle region of North Carolina
                        </Typography>
                        <Typography  component="h4" variant="h4" align='center'>
                             “Maybe put a quote that one of you like as a way to show visitors who you are”
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box sx={{bgcolor:'rgb(242, 244, 245)'}}>
                <Container maxWidth="lg">
                    <Grid className={styles.center} container spacing ={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                            <Box
                                component="img"
                                sx={{
                                height: 501,
                                width: 515.75,
                                }}
                                alt="The house from the offer."
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{textAlign:'center', mb:4}}>
                                <Typography component="h1" variant="h2" align='center'>
                                    Who we are
                                </Typography>
                            </Box>
                            <List component="ul">

                                <ListItem component="li">
                                    <ListItemText primary = "We are passionate entrepreneurs with diverse professional experiences and a wide range of skills, committed to continuing your legacy by:"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:4}}>
                                    <ListItemText primary = "•Using a hands-on approach to learn your business"/>
                                </ListItem>
                                <ListItem component="li" sx={{ml:4}}>
                                <ListItemText primary = "•Empowering your team to meet new challenges and growth opportunities"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:4}}>
                                <ListItemText primary = "•Xxxxx"/>
                                </ListItem>
                                <ListItem component="li"sx={{ml:4}}>
                                <ListItemText primary = "•Our goal is to honor the foundation you´ve built while guiding your business to     future success."/>
                                </ListItem>
                            
                            </List>
                        </Grid>
                    
                    </Grid>
                </Container>
            </Box>

            <Box sx={{bgcolor:'#ffffff'}}>
                <Container maxWidth="lg">
                    <Grid className={styles.center} container spacing ={2}>
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography component="h1" variant="h2" align='center'>
                                    Who you are
                                </Typography>
                                <Typography>
                                    Business owners that:
                                </Typography>
                                <Typography>
                                    Desire a sucessfull continuity of their business
                                </Typography>
                                <Typography>
                                    Prioritize a smooth and transparent transition of ownership
                                </Typography>
                                <Typography>
                                    Want employers, customers and suppliers well taken care of in the future
                                </Typography>
                                <Typography>
                                    Understand the purchase price isn´t the only fator to be considerated during the transaction
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                            <Box
                                component="img"
                                sx={{
                                height: 501,
                                width: 515.75,
                                }}
                                alt="The house from the offer."
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{bgcolor:'rgb(242, 244, 245)'}}>
                <Container maxWidth="lg">
                    <Grid className={styles.center} container spacing ={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                            <Box
                                component="img"
                                sx={{
                                height: 501,
                                width: 515.75,
                                }}
                                alt="The house from the offer."
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography component="h1" variant="h2" align='center'>
                                    What we are seeking
                                </Typography>
                                <Typography>
                                    We are looking for business that:
                                </Typography>
                                <Typography>
                                    Are located in the Triangle region of North Carolina
                                </Typography>
                                <Typography>
                                    Operates in markets with long-term viability and growth opportunities
                                </Typography>
                                <Typography>
                                    Excel in management
                                </Typography>
                                <Typography>
                                    Have revenue between $3M to $15M
                                </Typography>
                                <Typography>
                                    Have EBITDA greater than $500K
                                </Typography>
                            </Box>
                        </Grid>
                    
                    </Grid>
                </Container>
            </Box>
        </TemplateDefault>
    )
}