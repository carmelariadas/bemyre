import { Box } from "@mui/material";
import React from "react";

import "../../../../styles/cardbandas.css";

export const CardBandasImg = ({ band_img }) => {
  return (
    <>
      <Box className="contendorImg">
        <img className="cardbandasimg" src={band_img} />
      </Box>
    </>
  );
};
