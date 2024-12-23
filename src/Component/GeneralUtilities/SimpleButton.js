import React from "react";
import { Button } from "@mui/material";

const SimpleButton = ({ label, onClick, type = "button", ...props }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
      sx={{
        backgroundColor: "black", 
        color: "white", 
        textTransform: "none", 
        padding: "10px 20px", 
        fontWeight: 300,
        borderRadius: "50px", 
        boxShadow: "none", 
        border: "none", 
        ...props.sx, 
      }}
      {...props} 
    >
      {label}
    </Button>
  );
};

export default SimpleButton;
