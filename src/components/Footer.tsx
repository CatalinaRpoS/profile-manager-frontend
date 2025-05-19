import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ borderTop: '1px solid #e0e0e0' }}>
            <Container
                maxWidth="xl"
                sx={{
                    color: 'text.secondary',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Typography variant="body1" component="h2" gutterBottom>
                    Factored | Technical Assessment
                </Typography>
                <Typography variant="body1" component="h2" gutterBottom>
                    Catalina Restrepo Salgado | May 2025
                </Typography>
                <Typography variant="body1" component="h2" gutterBottom>
                    Software Engineering Intern Position
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
