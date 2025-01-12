import React from 'react';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link'; // Importing the icon
import Typography from '@mui/material/Typography';

const RevisitPaper = () => {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ccc', // Outline for the card
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Shadow for the card
        borderRadius: '10px', // Rounded corners for a card look
        maxWidth: '330px',
        margin: '20px auto', // Center align
        backgroundColor: 'white', // Background color for the card
      }}
    >
      <h1>Revisit Paper</h1>
      <p>Challenge your friend by simply sharing a link to this test</p>
      <Button
        variant="contained"
        startIcon={<LinkIcon />}
        sx={{
          backgroundColor: 'rgb(97 80 161)',
          color: 'white',
          border: '2px solid #6a5acd', // Outline
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow
          '&:hover': {
            backgroundColor: 'darkviolet',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Increased shadow on hover
          },
          width: '100%',
        }}
      >
        Visit
      </Button>
      <Typography
        variant="body2"
        sx={{
          marginTop: '20px',
          opacity: 0.6, // Makes the text less visible
        }}
      >
        Instructions for how to upload your handwritten material are given below
      </Typography>
    </div>
  );
};

export default RevisitPaper;
