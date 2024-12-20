import React from "react";
import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Dashboard
      </Typography>
      <Button color="inherit" href="/dashboard/weather">Weather</Button>
      <Button color="inherit" href="/dashboard/news">News</Button>
      <Button color="inherit" href="/dashboard/task">Task</Button>
    </Toolbar>
  </AppBar>
);

const Footer = () => (
  <Box component="footer" sx={{ textAlign: "center", padding: 2, mt: "auto", backgroundColor: "#f1f1f1" }}>
    <Typography variant="body2">© 2024 Your App Name</Typography>
  </Box>
);

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flex: 1, padding: 2 }}>
        <Outlet /> 
      </Box>
      <Footer />
    </Box>
  );
};

export default DashboardLayout;
