import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { AuthContext } from "../../AuthContext";
import { signOut } from "firebase/auth"; 
import { auth } from "../../firebase";  

import logo from "../logo-world.png";
import SimpleButton from "../GeneralUtilities/SimpleButton";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)  
      .then(() => {
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error during logout:", error);  
      });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        padding: "10px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "60px", marginRight: "10px" }}
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

        <SimpleButton onClick={handleLogout} label="Log out" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
