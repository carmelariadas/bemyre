import React from "react";
import { Bubble } from "../Bubble.jsx";

export const CardConcertFooter = ({
  generoMusica1,
  generoMusica2,
  generoMusica3,
}) => {
  return (
    <div className="card-footer">
      <Bubble generoMusica={generoMusica1}></Bubble>
      <Bubble generoMusica={generoMusica2}></Bubble>
      <Bubble generoMusica={generoMusica3}></Bubble>
    </div>
  );
};
