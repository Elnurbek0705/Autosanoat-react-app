import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const ModeButton = () => {
  const { theme, isDarkMode, setIsDarkMode } = useTheme();
  return (
    <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <LightMode sx={{ color: theme.toggleColor }} />
      ) : (
        <DarkMode sx={{ color: theme.toggleColor }} />
      )}
    </IconButton>
  );
};

export default ModeButton;
