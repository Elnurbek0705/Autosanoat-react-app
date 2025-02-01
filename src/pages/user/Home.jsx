import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "@mui/material";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="fullContainer">
      <video autoPlay loop muted>
        <source
          src="https://cdn.create.vista.com/api/media/medium/341950604/stock-video-digital-meter-power-energy-purple-powerful-around-animation-for-advertise-and-banner?token="
          type="video/mp4"
        />
      </video>
      <div className="overlay" style={{ background: theme.overlayBg }}>
        <h1>Auto Shopga Xush Kelibsiz!</h1>
        <p>AutoShop – dunyodagi eng yaxshi avtomobillarni topishingiz mumkin bo‘lgan joy.</p>
        <Link to="models">
          <Button
            sx={{
              background: theme.btnBg,
              color: "#fff",
              padding: "10px 15px",
              fontWeight: "bold",
            }}
          >
            Modellarni ko'rish
          </Button>
        </Link>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
