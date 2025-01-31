import ModeButton from "./ModeButton";
import { useTheme } from "../../contexts/ThemeContext";
import { Box, Stack } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { flexRowBetween, fullWidthBox } from "../../constants";
import VerifyButton from "./VerifyButton";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Stack
      sx={{
        ...flexRowBetween,
        ...fullWidthBox,
        bgcolor: theme.navbarBg,
        color: theme.toggleColor,
        boxShadow: theme.shadow,
      }}
    >
      <Breadcrumbs />
      <Box>
        <VerifyButton />
        <ModeButton />
      </Box>
    </Stack>
  );
};

export default Navbar;
