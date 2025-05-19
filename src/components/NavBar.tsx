import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsAuthenticated(!!userId);
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateToProfile = () => {
    navigate('/profile');
    handleMenuClose();
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
    handleMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    navigate('/');
    handleMenuClose();
  };
  
  return (
    <Box>
      <AppBar
        elevation={0}
        position='static'
        sx={{
          backgroundColor: 'white',
          padding: 1,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href='/' underline='none'>
            <Typography
              variant='h5'
              component='div'
              sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}
            >
              Profile Manager
            </Typography>
          </Link>

          <IconButton
            onClick={handleMenuClick}
            color='primary'
            sx={{
              borderRadius: 8,
              width: 50,
              backgroundColor: 'primary.main',
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {isAuthenticated ? (
              <>
                <MenuItem onClick={handleNavigateToProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleNavigateToLogin}>Login</MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
