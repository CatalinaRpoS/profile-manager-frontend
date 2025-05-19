import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button } from '@mui/material';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('userId', '1');
        navigate('/profile');
    };

    return (
    <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                width: 'fit-content',
                alignItems: 'center',
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                my: 4,
                p: 6,
            }}
        >
            <Typography
                variant='h4'
                component='h1'
                gutterBottom
                sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}
            >
                Welcome to Profile Manager!
            </Typography>
            <Typography variant='body1' gutterBottom color='text.secondary'>
                Please enter your credentials to log in.
            </Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    size='small'
                    type='email'
                    required
                    sx={{ mt: 4, mb: 2 }}
                />
                <TextField
                    label='Password'
                    variant='outlined'
                    fullWidth
                    size='small'
                    type='password'
                    required
                    sx={{ mb: 2 }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2,
                    }}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            backgroundColor: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </Box>
    </Container>
    )
};

export default Login;
