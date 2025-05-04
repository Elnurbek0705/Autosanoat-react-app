import React, { useState } from "react";
import { Box, Button, Input, Modal, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

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

const inputStyle = {
  "--Input-focused": 1,
  width: "100%",
  my: "5px",
};

const Register = ({ open, handleClose, handleSwitch, inputSx = inputStyle }) => {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          ...style,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Register</Typography>
        <Typography sx={{ mt: 2 }}>
          Yangi hisob yaratish uchun quyidagi ma'lumotlarni kiriting.
        </Typography>

        <Input required name="name" placeholder="Name" onChange={handleChange} sx={inputSx} />
        <Input required name="email" placeholder="Email" onChange={handleChange} sx={inputSx} />
        <Input
          required
          name="password"
          placeholder="Password"
          onChange={handleChange}
          sx={inputSx}
        />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Register
        </Button>
        <Button
          onClick={async () => {
            await register(form);
            handleSwitch();
          }}
          fullWidth
          sx={{ mt: 1 }}
        >
          Already have an account? Login
        </Button>
      </Box>
    </Modal>
  );
};

export default Register;
