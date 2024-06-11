import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const inputStyles = {
  sx: {
    fontSize: { xs: 11, sm: 14.5, md: 15, lg: 15, xl: 15 },
    fontWeight: 500,
    letterSpacing: 0.1,
    lineHeight: 1.25,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
    "&:hover": {
      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    },
  },
};

const inputLabelStyles = {
  sx: {
    fontSize: { xs: 11.5, sm: 15, md: 15, lg: 15, xl: 15 },
    fontWeight: 200,
    opacity: 0.75,
    letterSpacing: 0.75,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
  },
};

const MessageInput = ({
  id,
  label,
  name,
  setValue,
  maxLength,
  disabled = false,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setValue(input);
  };

  return (
    <Box sx={{ position: "relative", my: { xs: 3.5, sm: 4, md: 4, lg: 5 } }}>
      <TextField
        id={id}
        label={label}
        name={name}
        multiline
        fullWidth
        rows={6}
        variant="outlined"
        InputProps={inputStyles}
        InputLabelProps={inputLabelStyles}
        inputProps={{ maxLength }}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onBlur={() => handleSubmit()}
        disabled={disabled}
      />
      {input.length !== 0 && (
        <Box sx={{ position: "absolute", bottom: 0, right: 5 }}>
          <Typography
            sx={{
              fontSize: { xs: 9.5, sm: 10, md: 11, lg: 12, xl: 12 },
              opacity: 0.6,
              transform: "skewX(-5deg)",
            }}
          >
            {input.length}/{maxLength}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MessageInput;
