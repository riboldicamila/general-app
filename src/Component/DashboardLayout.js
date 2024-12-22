import React from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "./UserSignIn/Navbar";
import { Outlet } from "react-router-dom";

const Footer = () => (
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
