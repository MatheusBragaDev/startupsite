import TemplateDefault from '@/templates/Default';
import { Box, Container,} from '@mui/system';
import { Grid, Typography, Button} from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/app/page.module.css";
import Card from '@/components/Card/Card'

export default function Team() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', mt: 23 ,position: 'relative' }}>
                <BackgroundImage/>
                <Container maxWidth="lg">
                    <Box className={styles.box} sx={{px:8, py:15, justifyContent:'center'}}>                    
                      <Typography  component="h1" variant="h2" align='center' sx={{ color:'#8B0000'}}>
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
        <Grid container spacing={2} justifyContent="center">

          <Grid item xs={12} sm={6} md={6}>
            <Card
              image = {"/dustinportrait.jfif"}
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
          
        </Grid>
      </Container>
        </TemplateDefault>
    )
}