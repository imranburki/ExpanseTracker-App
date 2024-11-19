import React from 'react';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';

function Header({ onLogout }) {
  return (
    <ExitToAppSharpIcon
      onClick={onLogout}
      style={{
        cursor: 'pointer',
        color: 'black',
         fontSize: "medium",
      }}
    />
  );
}

export default Header;
