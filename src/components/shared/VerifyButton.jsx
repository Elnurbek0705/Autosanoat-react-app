import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const VerifyButton = ({text, ico}) => {
  const { theme } = useTheme();
  return (
    <Button sx={{ bgcolor: theme.btnBg, color: "#fff", textTransform: "capitalize", mx: '5px' }}>
      {ico}
      {text}
    </Button>
  );
};

export default VerifyButton;
