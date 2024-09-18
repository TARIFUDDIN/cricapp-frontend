import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#004d40', color: 'white', textAlign: 'center', padding: '1rem', position: 'relative', bottom: 0, width: '100%' }}>
      <Typography variant="body2">
        &copy; 2024 XYZ Cricket Tournament. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
