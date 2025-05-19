import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Paper, Button, Dialog, DialogTitle, DialogContent, Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProfileCard from '../components/ProfileCard';
import SkillsCard from '../components/SkillsCard';

export type ProfileData = {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  position: string;
  profile_picture: string;
};

export type SkillsData = {
  id: number;
  name: string;
  level: number;
  person_id: number;
};

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [skillsData, setSkillsData] = useState<SkillsData[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      const apiUrl = import.meta.env.VITE_BACKEND_URL || '';
      if (!apiUrl) return console.error('API URL is not defined');
      try {
        const personId = localStorage.getItem('userId');
        const response = await fetch(`${apiUrl}/api/person/${Number(personId)}`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    const getSkillsData = async () => {
      const apiUrl = import.meta.env.VITE_BACKEND_URL || '';
      if (!apiUrl) return console.error('API URL is not defined');
      try {
        const personId = localStorage.getItem('userId');
        const response = await fetch(`${apiUrl}/api/skill/${personId}`);
        const data = await response.json();
        setSkillsData(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    getProfileData();
    getSkillsData();
  }, []);

  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
                variant='h4'
                component='h1'
                gutterBottom
                color='primary.main'
                sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
          >
            Your Profile
          </Typography>
          <Paper
            elevation={0}
            sx={{ p: 3, backgroundColor: 'transparent', width: 'fit-content' }}>
            {profileData ? (
              <ProfileCard profileData={profileData} />
            ) : (
              <Typography variant='body1' color='text.secondary'>
                Loading profile data...
              </Typography>
            )}
          </Paper>

          <Button
            variant='outlined'
            color='primary'
            onClick={() => setOpen(true)}
            sx={{ mt: 4, textTransform: 'none', fontWeight: 'bold', borderRadius: 2 }}
            >
                View Skills
            </Button>
        </Box>
          
          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
            <DialogTitle>
                <Typography
                    variant='h4'
                    component='h1'
                    color='primary.main'
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                    Your Skills
                </Typography>
                <IconButton
                    sx={{ position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}
                    onClick={() => setOpen(false)}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            
            <DialogContent dividers>
              {skillsData.length > 0 ? (
                <SkillsCard skillsData={skillsData} />
              ) : (
                <Typography variant='body1' color='text.secondary'>
                  Loading skills data...
                </Typography>
              )}
            </DialogContent>
          </Dialog>
    </Container>
  );
};

export default Profile;
