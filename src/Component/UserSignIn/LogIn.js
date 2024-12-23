import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import SignIn from "./SignIn";
import Signup from "./Singup";
import AnimationBackground from "./AnimationBackground";

function LogIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Container
      maxWidth="lg"
      style={{ height: "100vh", display: "flex", maxWidth: "100%" }}
    >
      <Box
        sx={{
          flex: 1,
          height: "100vh",
        }}
      >
        <AnimationBackground />
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
            color: "var(--pale-lilac)",
          }}
        >
          {isSignIn ? "Sign Up" : "Log In"}
        </Button>
      </Box>
    </Container>
  );
}

export default LogIn;
