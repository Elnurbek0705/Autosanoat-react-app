import { Stack, Typography } from "@mui/material";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/ThemeContext";
import { flexRowBetween, cards } from "../../constants/styles";
import { Link } from "react-router-dom";

const ModelTypes = () => {
  const { selectedModel } = useData();
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
              <Link 
              key={model.id} 
              to={`modelDetails`} 
              state={{ selectedCar: model, selectedModel }}
            >
            
                <Stack
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
              </Link>
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
