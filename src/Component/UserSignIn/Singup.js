import React, { useState } from "react";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Container, Typography } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User  created successfully!");
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError(
            "This email is already registered. Please use another email or log in."
          );
          break;
        case "auth/invalid-email":
          setError("Invalid email format. Please enter a valid email address.");
          break;
        case "auth/weak-password":
          setError(
            "Password is too weak. Use at least 6 characters, including letters and numbers."
          );
          break;
        case "auth/operation-not-allowed":
          setError("Sign-up is temporarily disabled. Please contact support.");
          break;
        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection and try again."
          );
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
      }
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
        {error && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
