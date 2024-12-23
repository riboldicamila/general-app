import React, { useState } from "react";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Container, Typography } from "@mui/material";
import SimpleButton from "../GeneralUtilities/SimpleButton";

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
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "left", // Align text to the left
          fontWeight: "bold",
        }}
      >
        Welcome to
        <br />
        <Typography
          variant="h5"
          component="span"
          sx={{
            display: "inline",
            fontWeight: "bold",
          }}
        >
          Daily Panel:
        </Typography>
        <br />
        <Typography
          variant="body1"
          component="span"
          sx={{
            display: "inline",
            fontWeight: "normal",
          }}
        >
          Sign Up
        </Typography>
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
        
        <SimpleButton type="submit" variant="contained" color="primary" fullWidth label="Sign Up" />

      </form>
    </Container>
  );
};

export default Signup;
