import TemplateDefault from '@/templates/Default';
import { Box, Container,} from '@mui/system';
import { Grid, Typography, Button} from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/app/page.module.css";
import Card from '@/components/Card/Card'

export default function Team() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', margin: 0,position: 'relative' }}>
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box className={styles.box} sx={{px:8, py:15, justifyContent:'center'}}>                    
                        <Typography className={styles.center} component="h1" variant="h2" align='center'>
                            VULCAN HARBOUR VENTURE TEAM
                        </Typography>
                    </Box>
                </Container>
            </Box>

        <Container maxWidth="sm" sx={{pt:7, pb:5}}>
            <Typography color="black" component="h1" variant="h2" align="center">
                Meet the team
            </Typography>
        </Container>
      
      <Container maxWidth="lg">
        <Grid container spacing={1}>

          <Grid item xs={12} sm={6} md={6}>
            <Card
              image = {"https://source.unsplash.com/random?a=1"}
              title = {"Dustin"}
              subtitle = "Dustin´s Role"
              actions = {
                <>
                  <Button size="small" color="primary">
                    Dustin´s Bio Link
                  </Button> 
                  <Button size="small" color="primary">
                    {/* Remover */}
                  </Button>
                </> 
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
          <Card
              image = {"/DavidPortrait.jpg"}
              title = {"David"}
              subtitle = "David´s Role"
              actions = {
                <>
                  <Button size="small" color="primary">
                    David´s Bio Link
                  </Button> 
                  <Button size="small" color="primary">
                    {/* Remover */}
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