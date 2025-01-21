import React from 'react';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';

function Header({ onLogout }) {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://52.205.87.20:5000/users/logout', {
        method: 'POST',
        //credentials: 'include', // Include cookies for session management
      });

      if (response.ok) {
        alert('Logged out successfully');
        onLogout(); // Call the parent logout handler
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <ExitToAppSharpIcon
      onClick={handleLogout}
      style={{
        cursor: 'pointer',
        color: 'black',
        fontSize: 'medium',
      }}
    />
  );
}

export default Header;
