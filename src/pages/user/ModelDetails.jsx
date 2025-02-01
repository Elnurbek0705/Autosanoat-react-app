import { Box, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { flexRowBetween, cards, fullWidthBox } from "../../constants/styles";
import './style.css';
import { useState } from "react";

const ModelDetails = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const selectedCar = location.state?.selectedCar || {};
  const selectedModel = location.state?.selectedModel || {};
  const [view, setView] = useState('ichki');

  if (!location.state?.selectedCar) {
    return <p>Hech qanday model tanlanmagan.</p>;
  }

  console.log(selectedCar.details?.innerView);
  const formatPrice = () => (selectedCar.price * 13000).toLocaleString("en-US").replace(/,/g, " ");
  
  const handleChange = (event) => {
    setView(event.target.value);
  };
  
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
      <Typography px={'1.5rem'} variant="h2">Modellari</Typography>
      <Stack py={"1.5rem"} sx={{ ...flexRowBetween, ...fullWidthBox, textAlign: "left", alignItems: 'start !important' }}>
        <Stack className="cards"
          p={"1rem 1.5rem"}
          sx={{
            ...cards,
            bgcolor: theme.navbarBg,
            width: "35%",
            boxShadow: theme.shadow,
          }}
        >
          <h2 style={{ padding: "5px 0" }}>{selectedCar.name}</h2>
          <p>{formatPrice()} so'mdan</p>
          <img src={`/assets/img/${selectedCar.imageName}`} alt={selectedCar.name} />
          {selectedCar.details ? (
          <>
             <p><strong>Marka:</strong> {selectedModel.brand?.toUpperCase()}</p>
             <p><strong>Motor:</strong> {selectedCar.details.engine}</p>
             <p><strong>Year:</strong> {selectedCar.details.year}</p>
             <p><strong>Color:</strong> {selectedCar.details.color}</p>
             <p><strong>Distance:</strong> {selectedCar.details.distance}</p>
             <p><strong>Gearbox:</strong> {selectedCar.details.gearbox}</p>
             <p><strong>Description:</strong> {selectedCar.details.description}</p>
             <p style={{borderColor: theme.toggleColor}} className="umumiyXarajat"><strong>Umumiy xarajat:</strong> {formatPrice()} so'm</p>
          </>
          ) : (
          <p>Ma'lumotlar mavjud emas</p>
          )}
        </Stack>

        <Stack width={'62%'}>
          <h2 style={{ padding: '15px 0' }}>{selectedCar.name}</h2>
          <Box minHeight={'480px'} maxHeight={'480px'}>
          <img
          width={'100%'}
            src={`/assets/img/${view === 'ichki' ? selectedCar.details?.innerView : selectedCar.imageName}`} 
            alt={view === 'ichki' ? 'Ichki ko‘rinish' : 'Tashqi ko‘rinish'}
          />
          </Box>
          <p style={{padding: '30px 0'}}>Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
          <RadioGroup 
            sx={{...flexRowBetween, justifyContent: 'center'}} 
            aria-label="color" 
            name="color" 
            value={view} 
            onChange={handleChange}
          >
            <FormControlLabel value="ichki" control={<Radio />} label="Ichki ko'rinish" />
            <FormControlLabel value="tashqi" control={<Radio />} label="Tashqi ko'rinish" />
          </RadioGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ModelDetails;
