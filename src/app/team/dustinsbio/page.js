/* eslint-disable react/no-unescaped-entities */
import TemplateDefault from '@/templates/Default';
import { Box, Container} from '@mui/system';
import { Grid, Typography } from '@mui/material';
import styles from "@/app/page.module.css";

export default function DustinBios() {
    return(
        <TemplateDefault>
               
            <Box sx={{bgcolor:'rgb(242, 244, 245)', mt:18}} position='relative'>
                <Container>
                        <Typography  component="h1" variant="h3" align='center' color="#000">
                            Dustin Cotcamp - 
                        </Typography>
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{mb:4}}>

                                <Typography sx={{fontFamily: 'var(--font-montserrat)', mb:4}}>
                                    Originally from Cortland, NY, Dustin Cotcamp has a diverse background spanning over 15 years. Dustin developed a unique set of skills and abilities that make him a versatile and effective leader. His journey began as a professional poker player, where he mastered financial management, strategic thinking, and risk assessment. This honed his analytical skills and his ability to remain calm under pressure.
                                </Typography>

                                <Typography sx={{fontFamily: 'var(--font-montserrat)', my:4}}>
                                     Transitioning from poker to the corporate world, Dustin excelled as a Technical Support Specialist at ProVantage Corporate Solutions. Here, he developed expertise in technical training, customer support, and cross-functional team management. Later, he took on the challenge of managing his family's 500-acre farm and Airbnb business in Brazil. This role enhanced his operational management skills, as he implemented systems and processes that improved efficiency and productivity.  
                                </Typography>

                                <Typography sx={{fontFamily: 'var(--font-montserrat)', my:4}}>
                                    Most recently, Dustin served as a Sales Account Executive at Maze Wayz, where he further developed his sales and marketing acumen. His ability to understand customer needs, build strong client relationships, and drive business growth has been a hallmark of his career. 
                                </Typography>

                                <Typography sx={{fontFamily: 'var(--font-montserrat)', my:4}}>
                                    Dustin holds a Bachelor of Science in Kinesiology from the State University of New York at Cortland and has completed a Full Stack Web Development Bootcamp at Le Wagon in Rio de Janeiro. 
                                </Typography>
                                
                                <Typography>
                                    In his personal life, Dustin enjoys mentoring aspiring professionals and is actively involved in community organizations. He, his wife and 3 children have made Durham their home, where they continue to embrace new challenges and opportunities.
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </TemplateDefault>
    )
}