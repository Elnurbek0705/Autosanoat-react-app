import ModeButton from "./ModeButton";
import { useTheme } from "../../contexts/ThemeContext";
import { Box, Stack } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import { flexRowBetween, fullWidthBox } from "../../constants";
import VerifyButton from "./VerifyButton";
import { Person } from "@mui/icons-material";

const Navbar = () => {
  const { theme } = useTheme();
   const text = "Adminga o'tish"
  return (
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
        <VerifyButton text={text} ico={<Person sx={{ margin: "0 5px" }} />} />
        <ModeButton />
      </Box>
    </Stack>
  );
};

export default Navbar;
