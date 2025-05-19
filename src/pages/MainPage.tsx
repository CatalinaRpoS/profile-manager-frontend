import React from 'react';
import { Container, Typography, Card, CardContent, alpha, Grid } from '@mui/material';

const MainPage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
            <Typography
              variant='h4'
              component='h1'
              gutterBottom
              sx={{ color: 'primary.main', fontWeight: 'bold' }}
            >
                This is Your Place!
            </Typography>
            <Typography variant='body1' gutterBottom color='text.secondary'>
                As a member of Factored, you need to know all the information about your corporate profile.
            </Typography>
            <Typography variant='body1' gutterBottom color='text.secondary'>
                Because of, we have create this web application to help you manage your profile and the most important information we have about you.
            </Typography>
            <Typography variant='body1' gutterBottom color='text.secondary'>
                Follow the next instructions to get started:
            </Typography>

            <Grid 
                container 
                spacing={3} 
                sx={{ 
                    mt: 4,
                    width: '100%',
                    justifyContent: 'center'
                }}
            >
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Card 
                        sx={{ 
                            height: '100%',
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.4),
                            transition: 'transform 0.2s',
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.02)'
                            }
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', height: '100%' }}>
                            <Typography variant='h6' component='h2' gutterBottom>
                                Log In with your Credentials
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                You must use the same credentials you use to log in to your corporate profile.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Card 
                        sx={{ 
                            height: '100%',
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.4),
                            transition: 'transform 0.2s',
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.02)'
                            }
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', height: '100%' }}>
                            <Typography variant='h6' component='h2' gutterBottom>
                                Check your Profile
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Watch your profile information and make sure everything is correct.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Card 
                        sx={{ 
                            height: '100%',
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.4),
                            transition: 'transform 0.2s',
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.02)'
                            }
                        }}
                    >
                        <CardContent sx={{ textAlign: 'center', height: '100%' }}>
                            <Typography variant='h6' component='h2' gutterBottom>
                                Report any Issue
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Our team is here to help you correct any missing or incorrect information.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainPage;
