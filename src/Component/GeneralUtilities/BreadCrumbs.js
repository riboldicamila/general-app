import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const BasicBreadcrumbs = ({ pageTitle }) => {
  return (
    <Breadcrumbs
      sx={{
        fontSize: "1rem",
        "& .MuiLink-root": { color: "blue", textDecoration: "none" },
      }}
      separator="›"
    >
      <Typography color="text.primary">Daily Panel</Typography>
      <Typography
        color="#cbceed"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "var(--pale-lilac)",
          textUnderlineOffset: "4px",
        }}
      >
        {pageTitle}
      </Typography>
    </Breadcrumbs>
  );
};

export default BasicBreadcrumbs;
