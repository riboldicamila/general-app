import React, { useState } from "react";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Container, Typography } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User  created successfully!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography
        variant="subtitle1" 
        component="h1"
        gutterBottom
        sx={{
          textTransform: "uppercase", 
          fontWeight: "bold",
        }}
      >
        Welcome to Daily Panel: Sign up
      </Typography>

      <form onSubmit={handleSignup}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
