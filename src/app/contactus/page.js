import TemplateDefault from '@/templates/Default';
import { Box, Container, } from '@mui/system';
import { Grid, Typography, Button } from '@mui/material';
import Card from '@/components/Card/Card';
import Link from 'next/link';
import backgroundimage from '../../../public/teamcontactbg.png';

export default function Contactus() {
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
          bgcolor: 'rgb(242, 244, 245)',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 4, sm: 6 },
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          align="center"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem' },
            position: 'relative',
            py: { xs: 3, sm: 3 },
            mb:7,
          }}
        >
          Contact us to learn more about Vulcan Harbor Ventures, or confidentially discuss specific opportunities of investment or acquisition.
        </Typography>



        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Card
                image={""}
                title={"Dustin Cotcamp"}
                subtitle=""
                actions={
                  <>

                    <Typography variant="body2" >
                      Phone: <Link href="tel:914-208-1372"style={{color: 'rgb(184 56 47)',}}>914-208-1372</Link>
                    </Typography>


                    <Typography variant="body2">
                      Email: <Link href="mailto:dustin@vulcanharborventures.com" style={{color: 'rgb(184 56 47)',}}>dustin@vulcanharborventures.com</Link>
                    </Typography>


                    <Typography variant="body2">
                      LinkedIn: <Link href="https://www.linkedin.com/in/dustincotcamp/" target="_blank"style={{color: 'rgb(184 56 47)',}}>linkedin/Dustin</Link>
                    </Typography>


                    <Button size="small" color="primary" variant='contained'
                     sx={{
                      py: { sm: 1 },
                      px: { sm: 2 },
                      my: 2,
                      backgroundColor: 'rgb(184 56 47)',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgb(150 45 36)',
                      },
                    }}>
                      <Link href="https://calendly.com/dustin-vulcanharborventures/30min" target="_blank">Book a meeting (Calendar)</Link>
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