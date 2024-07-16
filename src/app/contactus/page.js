import TemplateDefault from '@/templates/Default';
import { Box, Container, } from '@mui/system';
import { Grid, Typography, Button } from '@mui/material';
import styles from "@/app/page.module.css";
import Card from '@/components/Card/Card';
import Link from 'next/link';
import Image from 'next/image'

export default function Contactus() {
  return (
    <TemplateDefault>

      <Box
        sx={{
          width: '100vw',
          mt: 8,
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
          }}>
          <Image
            alt="backgroundimage"
            src="/contactus.jfif"
            quality={100}
            fill
            sizes="100vhw"
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>



        <Box
          sx={{
            px: 'auto',
            py: 'auto',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              py: { xs: 2, sm: 5 },
              fontSize: { xs: '1.5rem', sm: '2.125rem' },
              fontFamily: 'var(--font-montserrat)',
              position: 'relative',
              fontWeight: 'bold',
            }}
          >
            CONTACT US
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: 'rgb(242, 244, 245)',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          component="caption"
          variant="caption"
          align="center"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem' },
            fontFamily: 'var(--font-montserrat)',
            position: 'relative',
            py: { xs: 1, sm: 1 },
          }}
        >
          Contact us to learn more about Vulcan Harbor Venture, or confidentially discuss specific opportunities of investment or acquisition.
        </Typography>



        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={"/dustinportrait.jfif"}
                title={"Dustin"}
                subtitle="Dustin´s Role"
                actions={
                  <>
                    <Typography variant="body2">
                      Email: <Link href="mailto:dustincodercamp@gmail.com">dustincodercamp@gmail.com</Link>
                    </Typography>
                    <Typography variant="body2">
                      LinkedIn: <Link href="https://www.linkedin.com/in/dustincotcamp/" target="_blank">linkedin/Dustin</Link>
                    </Typography>
                    <Button size="small" color="primary" variant='button'>
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