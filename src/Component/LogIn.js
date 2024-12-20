import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import SignIn from "./SignIn";
import Signup from "./Singup";
import image from "../Component/online-graph.png";

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
        <Box
          sx={{
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column", // Aligns items vertically
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        {isSignIn ? <SignIn /> : <Signup />}
        <Button
          type="submit"
          variant="text" // Makes the button have no background color
          color="primary"
          fullWidth
          onClick={() => setIsSignIn(!isSignIn)}
          style={{
            marginTop: "8px", // Add some space between the component and button
          }}
        >
          {isSignIn ? "Sign Up" : "Log In"}
        </Button>
      </Box>
    </Container>
  );
}

export default LogIn;
