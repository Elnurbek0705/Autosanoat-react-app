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

const Register = ({ open, handleClose, handleSwitch }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">Register</Typography>
        <Typography sx={{ mt: 2 }}>Yangi hisob yaratish uchun quyidagi ma'lumotlarni kiriting.</Typography>
        {/* Register form qo'shish mumkin */}
        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Register
        </Button>
        <Button fullWidth sx={{ mt: 1 }} onClick={handleSwitch}>
          Already have an account? Login
        </Button>
      </Box>
    </Modal>
  );
};

export default Register;
