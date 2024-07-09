import TemplateDefault from '@/templates/Default';
import { Box, Container,} from '@mui/system';
import { Grid, Typography, Button} from '@mui/material';
import styles from "@/app/page.module.css";
import Card from '@/components/Card/Card';
import Link from 'next/link';
import Image from 'next/image'

export default function Team() {
    return(
        <TemplateDefault>
            
            <Box  sx={{ width: '100vw', mt:16, position: 'relative' }}>
                
                
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
                  src="/contactus.jfif"
                  quality={100}
                  fill
                  sizes="100vhw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
                
                
                
                <Container maxWidth="lg">
                    <Box className={styles.box} sx={{px:8, py:15, justifyContent:'center'}}>                    
                        <Typography  component="h1" variant="h4" align='center' color='#000'sx={{fontWeight:'bold'}}>
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