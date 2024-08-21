import TemplateDefault from '@/templates/Default';
import { Box, Container, } from '@mui/system';
import { Grid, Typography, Button } from '@mui/material';
import Card from '@/components/Card/Card'
import Link from 'next/link';
import backgroundimage from '../../../public/teamcontactbg.png';

export default function Team() {
  return (
    <TemplateDefault>

      {/* <Box
        sx={{
          minHeight: '50vh',
          width: '100vw',
          mt: {xs:5,sm:8,md:8,lg:8,xl:8},
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            opacity: 1,
            backgroundImage: `url(${backgroundimage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
          }}>
        </Box>
      </Box> */}

      <Box
        sx={{
          mt: {xs:5,sm:8,md:8,lg:8,xl:8},
          bgcolor: 'rgb(242, 244, 245)',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}

      >
        <Typography
          component="h1"
          variant="h3"
          align="center"
          sx={{
            textAlign: "center",
            fontFamily: 'var(--font-montserrat)',
            my: 3,
          }}
        >
          Meet the Team
        </Typography>
        <Container maxWidth="lg" sx={{my:2}}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={"/meetphoto.png"}
                title={"Dustin Cotcamp"}
                subtitle="Principal"
                actions={
                  <>
                  <Typography variant="body2" >
                        
                  </Typography>

                   <Button size="small" color="primary" variant='contained'
                     sx={{
                      py: { sm: 1 },
                      px: { sm: 2 },
                      backgroundColor: 'rgb(184 56 47)',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgb(150 45 36)',
                      },
                    }}>
                      <Link href="/team/dustinsbio">Dustin´s Bio</Link>
                    </Button>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </TemplateDefault>
  )
}