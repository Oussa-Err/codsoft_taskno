import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" color="darkred" gutterBottom>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Button variant="text" onClick={handleHomeClick} sx={{ mt: 2 }}>
        Go to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
