import ModeButton from "./ModeButton";
import { useTheme } from "../../contexts/ThemeContext";
import { Box, Stack } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { flexRowBetween, fullWidthBox } from "../../constants";
import VerifyButton from "./VerifyButton";
import { Person } from "@mui/icons-material";
import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Navbar = () => {
  const { theme } = useTheme();
  const [modalState, setModalState] = useState(null); // 'login' | 'register' | null

  const handleOpen = (type) => setModalState(type);
  const handleClose = () => setModalState(null);
  const handleSwitch = () =>
    setModalState(modalState === "login" ? "register" : "login");

  const inputStyle = {
   "--Input-focused": 1,
   width: "100%",
   my: "5px", // yoki Login uchun width: 256 desangiz ham bo'ladi
 };
 

  return (
    <>
      <Stack
        sx={{
          ...flexRowBetween,
          ...fullWidthBox,
          bgcolor: theme.navbarBg,
          color: theme.toggleColor,
          boxShadow: theme.shadow,
          position: "sticky",
          top: 0,
          zIndex: 11,
        }}
      >
        <Breadcrumbs />
        <Box>
          <VerifyButton
            text={"Adminga o'tish"}
            ico={<Person sx={{ margin: "0 5px" }} />}
            onClick={() => handleOpen("login")}
          />
          <ModeButton />
        </Box>
      </Stack>

      {/* Login modal */}
      <Login
        open={modalState === "login"}
        handleClose={handleClose}
        handleSwitch={handleSwitch}
        inputSx={inputStyle} 
      />

      {/* Register modal */}
      <Register
        open={modalState === "register"}
        handleClose={handleClose}
        handleSwitch={handleSwitch}
        inputSx={inputStyle} 
      />
    </>
  );
};

export default Navbar;
