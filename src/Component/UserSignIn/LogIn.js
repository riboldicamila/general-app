import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import SignIn from "./SignIn";
import Signup from "./Singup";
import image from "./online-graph.png";
import AnimationBackground from "./AnimationBackground";

function LogIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Container maxWidth="lg" style={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          flex: 1,
          height: "100vh",
        }}
      >
        <AnimationBackground />
        {/* <Box
          sx={{
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        /> */}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        {isSignIn ? <SignIn /> : <Signup />}
        <Button
          type="submit"
          variant="text"
          color="primary"
          fullWidth
          onClick={() => setIsSignIn(!isSignIn)}
          style={{
            marginTop: "8px",
          }}
        >
          {isSignIn ? "Sign Up" : "Log In"}
        </Button>
      </Box>
    </Container>
  );
}

export default LogIn;
