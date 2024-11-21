import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const DateInput = ({ onCalculateAge }) => {
  const [dob, setDob] = useState("");

  const handleCalculateClick = () => {
    if (dob) {
      onCalculateAge(dob);
    }
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
    </Box>
  );
};

export default DateInput;
