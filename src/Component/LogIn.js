import React from "react";
import { Box, Container } from "@mui/material";
import SignIn from "./SignIn"; // Adjust the path as necessary
import image from "../Component/online-graph.png"; // Replace with your image path

function LogIn() {
  return (
    <Container maxWidth="lg" style={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          flex: 1,
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />{" "}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <SignIn />
      </Box>
    </Container>
  );
}

export default LogIn;
