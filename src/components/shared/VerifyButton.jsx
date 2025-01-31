import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const VerifyButton = () => {
  const { theme } = useTheme();
  return (
    <Button sx={{ bgcolor: theme.btnBg, color: "#fff", textTransform: "capitalize", mx: '5px' }}>
      <Person sx={{ margin: "0 5px" }} />
      Adminga o‘tish
    </Button>
  );
};

export default VerifyButton;
