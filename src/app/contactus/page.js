import TemplateDefault from '@/templates/Default';
import { Box, Container, } from '@mui/system';
import { Grid, Typography, Button } from '@mui/material';
import Card from '@/components/Card/Card';
import Link from 'next/link';
import backgroundimage from '../../../public/teamcontactbg.png';

export default function Contactus() {
  return (
    <TemplateDefault>

      <Box
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
      </Box>

      <Box
        sx={{
          bgcolor: 'rgb(242, 244, 245)',
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
          }}
        >
          Contact us to learn more about Vulcan Harbor Ventures, or confidentially discuss specific opportunities of investment or acquisition.
        </Typography>



        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={"/meetphoto.png"}
                title={"Dustin Cotcamp"}
                subtitle="Principal"
                actions={
                  <>
                    <Typography variant="body2">
                      Email: <Link href="mailto:dustincodercamp@gmail.com">dustincodercamp@gmail.com</Link>
                    </Typography>
                    <Typography variant="body2">
                      LinkedIn: <Link href="https://www.linkedin.com/in/dustincotcamp/" target="_blank">linkedin/Dustin</Link>
                    </Typography>
                    <Button size="small" color="primary" variant='contained'
                     sx={{
                      py: { sm: 1 },
                      px: { sm: 1 },
                      backgroundColor: 'rgb(184 56 47)',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgb(150 45 36)',
                      },
                    }}>
                      Book a meeting (Calendar)
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