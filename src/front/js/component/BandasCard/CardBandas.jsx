import React from "react";
import "../../../styles/cardbandas.css";
import { CardBandasFooter } from "./aux/CardBandasFooter.jsx";
import { CardBandasImg } from "./aux/CardBandasImg.jsx";
import { CardBandasInfo } from "./aux/CardBandasInfo.jsx";
import { Card } from "@mui/material";
import { useTheme, Box } from "@mui/material";


export const CardBandas = ({
  band_img,
  name,
  // generosMusica,
  city, 
  description,
  // integrantes,
  in_demand,
  to
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Card
        className="card-bandas style-card"
        sx={{
          backgroundColor: theme.palette.background.card,
          display: "flex",
          boxSizing: "content-box",
        }}
      >
        <CardBandasImg band_img={band_img} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardBandasInfo
            name={name} 
            city={city}
            // integrantes={integrantes}
            in_demand={in_demand}
            description={description}
          />
          <CardBandasFooter to={to}
            // generosMusica={generosMusica}
          />
        </Box>
      </Card>
    </Box>
  );
};
