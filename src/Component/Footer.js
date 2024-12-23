import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        padding: 2,
        mt: "auto",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography variant="body2">© 2024 Daily Panel</Typography>
    </Box>
  );
};

export default Footer;
