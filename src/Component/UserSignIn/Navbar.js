import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../logo192.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" href="/dashboard/weather">
            Weather
          </Button>
          <Button color="inherit" href="/dashboard/news">
            News
          </Button>
          <Button color="inherit" href="/dashboard/task">
            Task
          </Button>
        </Box>

        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
