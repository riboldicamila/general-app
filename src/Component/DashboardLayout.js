import React from "react";
import { Box } from "@mui/material";
import Navbar from "./UserSignIn/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flex: 1, padding: 2, marginTop: "60px" }}>
        <Dashboard />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default DashboardLayout;
