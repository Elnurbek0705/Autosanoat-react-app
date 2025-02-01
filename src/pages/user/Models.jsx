import React from "react";
import { Stack } from "@mui/material";
import { useData } from "../../contexts/DataContext";
import { flexRowBetween, cards } from "../../constants/styles";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Models = () => {
  const { cars, setSelectedModel } = useData();
  const { theme } = useTheme();

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  return (
    <Stack
      sx={{
        padding: "2rem",
        fontSize: "25px",
        minHeight: "90.35vh",
        bgcolor: theme.mainBg,
        color: theme.toggleColor,
      }}
    >
      <h1>Modellar</h1>
      <Stack py={"1rem"} sx={{ ...flexRowBetween, textAlign: "center" }}>
        {cars.length > 0 ? (
          cars.map((car) =>
            car.models && car.models.length > 0 && (
              <Link
                key={car.id}
                to={`modelTypes`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => handleModelSelect(car)}
              >
                <Stack
                  p={"1rem"}
                  sx={{ ...cards,
                    bgcolor: theme.navbarBg,
                    "&:hover": {
                      boxShadow: theme.shadow,
                    },
                  }}
                >
                  <img
                    width={"290px"}
                    height={"220px"}
                    src={`/assets/img/${car.models[0].imageName}`}
                    alt={car.brand}
                  />
                  {car.brand?.toUpperCase()}
                </Stack>
              </Link>
            )
          )
        ) : (
          <p>Yuklanmoqda...</p>
        )}
      </Stack>
    </Stack>
  );
};

export default Models;
