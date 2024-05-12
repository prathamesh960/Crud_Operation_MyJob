import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export default function Nav() {
  // Get the navigate function from the react-router-dom package
  const navigate = useNavigate();

  // Function to handle form submission logout
  const handleSubmit = () => {
    // Navigate when the logout button is clicked
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar component for the navigation bar */}
      <AppBar position="static">
        {/* Toolbar component for the navigation bar */}
        <Toolbar>
          {/* Icon button for the menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Typography for the title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Job App
          </Typography>
          {/* Logout button */}
          <Button color="inherit" onClick={handleSubmit}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
