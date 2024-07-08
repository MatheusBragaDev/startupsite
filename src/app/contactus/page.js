import TemplateDefault from '@/templates/Default';
import { Box, Container,} from '@mui/system';
import { Grid, Typography, Button} from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/app/page.module.css";
import Card from '@/components/Card/Card';
import Link from 'next/link';

export default function Team() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', mt: 23, position: 'relative' }}>
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box className={styles.box} sx={{px:8, py:15, justifyContent:'center'}}>                    
                        <Typography  component="h1" variant="h2" align='center'sx={{ color:'#8B0000'}}>
                            CONTACT US
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box sx={{py:5}}>

                <Typography color="black" component="h6" variant="h6" align='center'>
                    Contact us to learn more about Vulcan Harbour Venture, or confidentially discuss specific opportunities of investment or acquisition.
                </Typography>
            
            </Box>

      
      <Container maxWidth="lg">
        <Grid container spacing={1} justifyContent="center"> 

          <Grid item xs={12} sm={6} md={6}>
            <Card
              image = {"/dustinportrait.jfif"}
              title = {"Dustin"}
              subtitle = "Dustin´s Role"
              actions = {
                <>
                  <Typography variant="body1">
                    Email: <Link href="mailto:dustincodercamp@gmail.com">dustincodercamp@gmail.com</Link>
                 </Typography>
                 <Typography variant="body1">
                    LinkedIn: <Link href="https://www.linkedin.com/in/dustincotcamp/" target="_blank">linkedin/Dustin</Link>
                </Typography>
                  <Button size="small" color="primary">
                    Book a meeting (Calendar)
                  </Button>
                </> 
              }
            />
          </Grid>

          
        </Grid>
      </Container>
        </TemplateDefault>
    )
}