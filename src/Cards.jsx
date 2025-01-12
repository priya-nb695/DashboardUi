import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const OutlinedCard = ({ sx }) => {
  return (
    // <Paper
    //   elevation={3}
    //   sx={{
    //     padding: 2,
    //     height: 150, 
    //     ...sx,
    //   }}
    // >
    <div>
       <Typography variant="h6">Card Title</Typography>
       <Typography variant="body2">Some content inside the card.</Typography>
    </div>
     
    // </Paper>
  );
};

export default OutlinedCard;
