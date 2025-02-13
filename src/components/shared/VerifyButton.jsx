import { Button } from "@mui/material";

const VerifyButton = ({ text, ico, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} startIcon={ico}>
      {text}
    </Button>
  );
};

export default VerifyButton;
