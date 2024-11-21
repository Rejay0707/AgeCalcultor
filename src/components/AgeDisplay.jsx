import React from "react";
import { Typography, Box } from "@mui/material";

const AgeDisplay = ({ age }) => {
  return (
    <Box
      sx={{
        mt: 2, // Space above the message
        color: "#1E88E5", // Distinct blue color
        fontWeight: "bold", // Bold text
        textAlign: "center", // Centered text
      }}
    >
      <Typography variant="body1">
        You are {age.years} years, {age.months} months, and {age.days} days old.
      </Typography>
    </Box>
  );
};

export default AgeDisplay;

