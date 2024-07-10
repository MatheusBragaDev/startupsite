import TemplateDefault from '@/templates/Default';
import { Box, Container,} from '@mui/system';
import { Grid, Typography, Button} from '@mui/material';
import BackgroundImage from "@/components/BackgroundImage";
import styles from "@/app/page.module.css";
import Card from '@/components/Card/Card'
import Image from 'next/image'
import Link from 'next/link';

export default function Team() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', mt: 8 ,position: 'relative' }}>
                
            <Box
              sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: -1,
                  overflow: 'hidden',
                  opacity: 0.75,
                }}>
                <Image
                  alt="backgroundimage"
                  src="/team.jfif"
                  quality={100}
                  fill
                  sizes="100vhw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>

                <Container maxWidth="lg">
                    <Box sx={{px:8, py:15, justifyContent:'center'}}>                    
                      <Typography  component="h1" variant="h4" align='center' color='#000' 
                        sx={{  
                          py: { xs: 2, sm: 5 }, 
                          fontSize: { xs: '1.5rem', sm: '2.125rem' },
                          fontFamily: 'var(--font-montserrat)',
                          position: 'relative',
                          fontWeight: 'bold',
                        }}
                      >
                            VULCAN HARBOUR VENTURE TEAM
                        </Typography>
                    </Box>
                </Container>
            </Box>

        <Container maxWidth="sm" sx={{pt:7, pb:5}}>
            <Typography color="black" component="h1" variant="h4" align="center"
             sx={{  
              py: { xs: 1, sm: 1 }, 
              fontSize: { xs: '1.5rem', sm: '2.125rem' },
              fontFamily: 'var(--font-montserrat)',
              position: 'relative',
            }}>
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
                  <Link 
                  href="/team/dustinsbio"
                  passHref >
                  <Button size="small" color="primary">
                    Dustin´s Bio Link
                  </Button> 
                  </Link>
                 
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