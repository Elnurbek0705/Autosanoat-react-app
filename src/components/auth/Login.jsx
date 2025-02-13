import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = ({ open, handleClose, handleSwitch }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">Login</Typography>
        <Typography sx={{ mt: 2 }}>Iltimos, tizimga kirish uchun ma'lumotlaringizni kiriting.</Typography>
        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
        <Button fullWidth sx={{ mt: 1 }} onClick={handleSwitch}>
          Don't have an account? Register
        </Button>
      </Box>
    </Modal>
  );
};

export default Login;
