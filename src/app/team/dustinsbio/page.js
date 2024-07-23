/* eslint-disable react/no-unescaped-entities */
import TemplateDefault from '@/templates/Default';
import {Stack, Box, Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';


export default function DustinBios() {
    return (
        <TemplateDefault>

            <Box sx={{
                mt:8,
                bgcolor: 'rgb(242, 244, 245)',
                position: 'relative',
                py: { xs: 4, sm: 6 },
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }} >
                <Typography component="h1" variant="h3" align='center' sx={{ mb: 4 }}>
                    Dustin Cotcamp
                </Typography>

                <Container maxWidth="lg">
                    <Grid container
                        spacing={{ xs: 2, sm: 6, lg: 10 }}
                        alignItems="center"
                        sx={{ height: '100%' }}>

                        <Grid 
                            item xs={12} sm={6} 
                            sx={{ 
                                order: { xs: 1, sm: 2, lg: 2 }, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center' 
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    height: 'auto',
                                    width: '100%',
                                    borderRadius: "25px",
                                    boxShadow: 3,
                                }}
                                alt="Dustin Cotcamp"
                                src="/HeadshotCloseUp.jpg"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1, lg: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Stack spacing={1}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'left',
                                    justifyContent: 'center',
                                    width: '100%',

                                }}>

                                <Typography sx={{ textAlign: 'justify',
                                            fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.12rem' },  fontWeight: 'bold' }}>
                                 Entrepreneur, Business Strategist, and Mentor
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    Originally from Poughkeepsie, NY, Dustin Cotcamp brings over 15 years of diverse experience to the table. With a unique blend of strategic insight, leadership acumen, and operational expertise, Dustin has carved a niche as a versatile and effective leader in the entrepreneurial world.
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6, fontWeight: 'bold' }}>
                                    Entrepreneurial Beginnings and Global Exposure
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    Dustin’s entrepreneurial journey took off as a professional poker player, a career that had him traveling across Brazil, Costa Rica, and Canada. This experience honed his strategic thinking, financial management, and risk assessment skills, all while maintaining composure under pressure. The exposure to various cultures, languages, and experiences broadened his worldview and instilled in him the confidence to lead with a global perspective.
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6, fontWeight: 'bold' }}>
                                    Corporate Transition and Technical Expertise
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    Transitioning from poker to the corporate sector, Dustin excelled as a Technical Support Specialist at ProVantage Corporate Solutions. Here, he leveraged his analytical skills to master technical training, customer success, and cross-functional team management. His role was pivotal in enhancing operational efficiency and productivity, ensuring that his team had the tools needed to succeed.
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6, fontWeight: 'bold' }}>
                                    Agricultural Management and Operational Excellence
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    Dustin’s next challenge was managing his family’s 500-acre farm and Airbnb business in Brazil. This role further refined his operational management skills as he implemented systems and processes that significantly improved efficiency and productivity.
                                </Typography>
                                <Typography sx={{ mb: 2, lineHeight: 1.6, fontWeight: 'bold' }}>
                                    Sales Leadership and Business Development
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    Most recently, Dustin served as a Sales Account Executive at Maze Wayz, where he sharpened his sales and marketing acumen. His ability to understand customer needs, build strong client relationships, and drive business growth has been a cornerstone of his career achievements.

                                </Typography>
                                <Typography sx={{ mb: 2, lineHeight: 1.6, fontWeight: 'bold' }}>
                                    Personal Life and Mentorship
                                </Typography>

                                <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
                                    Currently residing in Durham, NC, with his wife and three young children, Dustin embraces new challenges and opportunities. He stays active through exercise, sports, and engaging activities with his kids. As a mentor, he actively contributes to Cody Sanchez’s Contrarian Thinking business buying community, sharing his expertise and insights on navigating acquisition entrepreneurship.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </TemplateDefault>
    )
}