import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}
  >
    <CircularProgress size={100} />
  </Box>
);

export default Loader;
