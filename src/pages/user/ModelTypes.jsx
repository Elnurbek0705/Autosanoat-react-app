import React from "react";
import { Stack, Typography } from "@mui/material";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/ThemeContext";
import { flexRowBetween, cards } from "../../constants/styles";

const ModelTypes = () => {
  const { selectedModel } = useData(); // selectedModelni olish
  const { theme } = useTheme();

  return (
    <Stack
      sx={{
        padding: "2rem",
        fontSize: "20px",
        minHeight: "90vh",
        bgcolor: theme.mainBg,
        color: theme.toggleColor,
      }}
    >
      {selectedModel ? (
        <>
          <Typography variant="h4">{selectedModel.brand.toUpperCase()} Models</Typography>
          <Stack py={"1rem"} sx={{ ...flexRowBetween, textAlign: "center" }}>
            {selectedModel.models.map((model) => (
              <Stack
                key={model.id}
                p={"1rem"}
                sx={{
                  ...cards,
                  bgcolor: theme.navbarBg,
                  "&:hover": {
                    boxShadow: theme.shadow,
                  },
                }}
              >
                <img
                  width={"290px"}
                  height={"220px"}
                  src={`/assets/img/${model.imageName}`}
                  alt={model.name}
                />
                <Typography>{model.name}</Typography>
                <Typography>{`Price: $${model.price}`}</Typography>
              </Stack>
            ))}
          </Stack>
        </>
      ) : (
        <Typography>Tanlangan model mavjud emas.</Typography>
      )}
    </Stack>
  );
};

export default ModelTypes;
