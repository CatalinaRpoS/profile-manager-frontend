import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const NotFoundError: React.FC = () => {
    return (
        <Container 
            maxWidth='xl'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Typography variant='h1' component='h1' gutterBottom color='primary.main'>
                404
            </Typography>
            <Typography variant='h5' component='h2' gutterBottom>    
                Page Not Found
            </Typography>
            <Typography variant='body1' gutterBottom color='text.secondary'>
                Sorry, but it seems that the page you are looking for does not exist.
            </Typography>
            <Typography variant='body1'>
                <Link href='/' underline='hover' color='primary.main'>
                    Go back to Home
                </Link>
            </Typography>
        </Container>
    );
}

export default NotFoundError;
