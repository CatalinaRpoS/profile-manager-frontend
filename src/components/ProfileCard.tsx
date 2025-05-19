import React from 'react';
import { Box, Card, Avatar, Typography, Stack, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import type { ProfileData } from '../pages/Profile';

interface ProfileCardProps {
    profileData: ProfileData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileData }: ProfileCardProps) => {
    return (
        <Card
            sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 2,
                boxShadow: 2,
                color: 'text.secondary',
                height: '100%',
                ':hover': {
                    boxShadow: 4,
                    transition: 'box-shadow 0.3s ease-in-out',
                }
            }}
        >
            <Grid container spacing={3} alignItems="center">
                <Grid size={{ xs: 12, sm: 'auto'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            alt={profileData.name + "'s profile picture"}
                            src={profileData.profile_picture}
                            sx={{ 
                                width: { xs: 80, sm: 100 }, 
                                height: { xs: 80, sm: 100 },
                                mb: { xs: 2, sm: 0 }
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 'auto' }}>
                    <Stack spacing={2}>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <AccountCircleIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography variant='body1'>
                                <strong>Name:</strong> {profileData.name}
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <WatchLaterIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography variant='body1'>
                                <strong>Age:</strong> {profileData.age}
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <EmailIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography variant='body1'>
                                <strong>Email:</strong> {profileData.email}
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <PhoneIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography variant='body1'>
                                <strong>Phone:</strong> {profileData.phone}
                            </Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <WorkIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            <Typography variant='body1'>
                                <strong>Position:</strong> {profileData.position}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProfileCard;
