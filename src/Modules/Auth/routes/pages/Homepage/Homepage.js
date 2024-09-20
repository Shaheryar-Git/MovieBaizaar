import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import backgroundImage from "../../../../../assets/background.jpg";
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '92vh', // Full viewport height
        width: '100%',  // Full viewport width
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        sx={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          color: '#f5f5f5', // Light color to contrast with the dark shadow
          fontWeight: 'bold',
        }}
      >
        MOVIBAZAR
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 4 }}>
        <Button 
          component={Link} 
          to="/movies"
          variant="contained"
          sx={{
            backgroundColor: '#d32f2f', // Coral color
            fontWeight: 'bold',
          }}
        >
          Movies
        </Button>
        <Button
          component={Link} 
          to="/webseries"
          variant="contained"
          sx={{
            backgroundColor: '#d32f2f',
            fontWeight: 'bold',
          }}
        >
          Webseries
        </Button>
        <Button
          component={Link} 
          variant="contained"
          sx={{
            backgroundColor: '#d32f2f',
            fontWeight: 'bold',
          }}
        >
          TV Shows
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#d32f2f',
            fontWeight: 'bold',
          }}
        >
          Documents
        </Button>
      </Box>
    </Box>
  );  
};

export default Homepage;
