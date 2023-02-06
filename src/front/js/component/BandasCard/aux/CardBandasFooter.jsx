import React, { useContext } from "react";
import { Box, Chip, Divider } from "@mui/material";
import { Context } from "../../../store/appContext";
import { CardsButton } from "../../buttons/CardsButton.jsx";

export const CardBandasFooter = ({

  generosMusica,
}) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const { actions, store } = useContext(Context);

  return (
    <>
      <Box className="ps-3 pe-3 pb-2">
        {generosMusica?.map((element, index) => (
          <Chip
          key={element.id}
            className="me-2 mb-2"
            onDelete={
              store.username === store.current_user ? handleDelete : null
            }
            label={element}
          ></Chip>
        ))}

      </Box>

      <Box sx={{ display: "flex", gap: "0.25rem" }}>
        <CardsButton minWidth="160px" title="Más info" />
        <CardsButton minWidth="160px" title="Seguir" />
      </Box>
    </>
  );
};
