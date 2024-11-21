import React, { useState } from "react";
import { Paper, Typography, Box, useMediaQuery } from "@mui/material";
import DateInput from "./DateInput.jsx";
import AgeDisplay from "./AgeDisplay.jsx";
import calculateAge from "../utils/calculateAge.js";

const AgeCalculator = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm")); // Now works

  const [age, setAge] = useState(null);

  const handleCalculateAge = (dob) => {
    const calculatedAge = calculateAge(dob);
    setAge(calculatedAge);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>
          Age Calculator
        </Typography>
        <DateInput onCalculateAge={handleCalculateAge} />
      </Box>
      {age && (
        <Box sx={{ flex: 1 }}>
          <AgeDisplay age={age} />
        </Box>
      )}
    </Paper>
  );
};

export default AgeCalculator;
