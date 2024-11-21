import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const DateInput = ({ onCalculateAge }) => {
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  
  // Fixed current date
  const currentDate = new Date().toISOString().split("T")[0];

  const handleCalculateClick = () => {
    if (!dob) {
      setError("Please select a valid date of birth.");
      return;
    }

    if (dob >= currentDate) {
      setError("Date of birth must be in the past.");
      return;
    }

    setError(""); 
    onCalculateAge(dob);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Enter Date of Birth"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          max: currentDate, 
        }}
        error={Boolean(error)}
        helperText={error}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "blue",
          color: "white",
          "&:hover": {
            backgroundColor: "darkblue",
          },
        }}
        onClick={handleCalculateClick}
      >
        Calculate Age
      </Button>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default DateInput;
