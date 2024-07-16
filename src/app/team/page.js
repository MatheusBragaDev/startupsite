import TemplateDefault from '@/templates/Default';
import { Box, Container, } from '@mui/system';
import { Grid, Typography, Button } from '@mui/material';
import Card from '@/components/Card/Card'
import Image from 'next/image'
import Link from 'next/link';

export default function Team() {
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
            src="/team.jfif"
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
            VULCAN HARBOR VENTURE TEAM
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
          component="h4"
          variant="h4"
          align="center"
          sx={{
            fontSize: { xs: '1.5rem', sm: '2.125rem' },
            fontFamily: 'var(--font-montserrat)',
            position: 'relative',
            py: { xs: 1, sm: 1 },
          }}
        >
          Meet the team
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
                    <Link
                      href="/team/dustinsbio"
                      passHref >
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        sx={{
                          py: { sm: 1 },
                          px: { sm: 1 },
                          backgroundColor: 'rgb(184 56 47)',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: 'rgb(150 45 36)',
                          },
                        }}

                      >
                        Dustin´s Bio
                      </Button>
                    </Link>
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