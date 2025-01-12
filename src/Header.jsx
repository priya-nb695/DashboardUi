import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from "../src/assests/logo.png"
import './App.css'

const Header = () => {
  return (
    <AppBar position="static" >
      <header className="navbar">
       <div>
        <img src={logo} alt="logo"/>
       </div>
      
          <Typography variant="body1" sx={{ marginRight: 2, display: 'inline' }}>
            Dashboard
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, display: 'inline' }}>
            FirstGuru
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, display: 'inline' }}>
            TownHall
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, display: 'inline' }}>
            AI Evaluation
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, display: 'inline' }}>
            Performance
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, display: 'inline' }}>
            Mock Test 
          </Typography>
          {/* <MdNotificationsNone /> */}
          <div className='profile'>
            <div className='pro-Box'>P</div>
            Profile 
          </div>
       
      </header>
    </AppBar>
  );
};

export default Header;
