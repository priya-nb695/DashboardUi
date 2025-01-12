import React from 'react';
import Chip from '@mui/material/Chip';

const ColoredChips = () => {
  return (
    <div className='chipContainer'>
      <Chip label="Geography"  sx={{
          backgroundColor: '#0fb6b0', // Custom purple
          color: '#fff', // White text
        }} />
      <Chip label="Politics"  sx={{
          backgroundColor: '#f0ca50', // Custom purple
          color: '#fff', // White text
        }}  />
         <Chip label="Geography"  sx={{
          backgroundColor: '#0fb6b0', // Custom purple
          color: '#fff', // White text
        }} />
      <Chip label="Current Affairs"  sx={{
          backgroundColor: 'red', // Custom purple
          color: '#fff', // White text
        }}  />
      
    
      <Chip label="Social Studies"  sx={{
          backgroundColor: '#0fb6b0', // Custom purple
          color: '#fff', // White text
        }} />
      <Chip label="English Literature"  sx={{
          backgroundColor: '#ddd8e1', // Custom purple
          color: '#fff', // White text
        }}  />
          <Chip label="Mathematics"  sx={{
          backgroundColor: 'red', // Custom purple
          color: '#fff', // White text
        }} />
      <Chip label="Indian History"  sx={{
          backgroundColor: '#f0ca50', // Custom purple
          color: '#fff', // White text
        }} />
      <Chip label="Economics"  sx={{
          backgroundColor: '#0fb6b0', // Custom purple
          color: '#fff', // White text
        }}  />
    </div>
  );
};

export default ColoredChips;
