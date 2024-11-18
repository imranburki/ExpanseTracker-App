import React, { useState } from 'react';
import { Menu, MenuItem, Button, Typography, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import './Profile.css';

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedInUser] = useState({ username: 'JohnDoe' });  // Dummy user data

  // Open Account Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Account Menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="profile-container">
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Typography variant="h6" sx={{ marginRight: 2 }}>
          Welcome, {loggedInUser.username}
        </Typography>
        <Button onClick={handleClick}>
          <AccountCircle sx={{ fontSize: 40 }} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default Profile;
