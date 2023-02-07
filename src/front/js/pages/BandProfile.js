import React, { useEffect, useState, useContext } from "react";
import "../../styles/bandprofile.css";
import { HeaderProfile } from "../component/HeaderProfile";
import { Divider, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { locales } from "../mockingData";
import { CardBandsProfile } from "../component/card/CardBandsProfile.jsx";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import {Context} from '../store/appContext'


export const BandProfile = () => {

  const [aBands, setABands] = useState({})
  const params = useParams();
  const theme = useTheme();
  const { actions, store} = useContext(Context)


 
  useEffect(() => {
    console.log("hola");
    // actions.setId(params.id)
    const fetchLocales = async () => {
      await fetch(`${process.env.BACKEND_URL}/api/bandasprofile/${params.bandaid}`, {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${store.token_local}`,
        // },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setABands(result);
        });
    };
    fetchLocales();
  }, []);
  return (
    <>
      <Box className="container-fluid profile-header">
        <img
          className="image-header"
          src={aBands.band_img}
        />
      </Box>

      <Box className="container ">
        {/* <Grid container spacing={2}>
          <Grid xs={12} sm={3} className="container-card">
            <CardLocalProfile />
          </Grid>
          <Grid xs={12} sm={6} className="container-contenido" sx={{backgroundColor: theme.palette.background.card, margin:"2rem", padding:"1rem", marginTop:"3rem"}}>
            <Box>
              
            </Box>
          </Grid>
        </Grid> */}
        <div className="row">
          <div className="col-lg-4 container-card">
            <CardBandsProfile
              band_img={aBands.band_img}
              name={aBands.name}
              // ubicacion_local={aBands.ubicacion_local}
              city={aBands.city}
              description={aBands.description}
              in_demand={aBands.in_demand}


              
              // generosMusica={aBands.generosMusica}
            />
          </div>
          <div className="col-lg-8 container-contenido">
            <Box
              className="contenido-localprofile"
              sx={{ backgroundColor: theme.palette.background.card }}
            >
              <Typography variant="h3">Nuestro estilo</Typography>
              <Divider />

              <Typography className="mt-3" variant="body1">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                N. del T. persona que se dedica a la imprenta desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años, sino
                que tambien ingresó como texto de relleno en documentos
                electrónicos, quedando esencialmente igual al original.
              </Typography>

              <Typography className="mt-5" variant="h3">
                Galería
              </Typography>
              <Divider />

              <Grid container spacing={2}>
                {locales[0].galeria?.map((element, index) => (
                  <Grid xs={12} sm={4} >
                      <img className="imagen-galeria" src={element} />
                  </Grid>
                ))}
              </Grid>

              {/* <div className="row">
                {locales[0].galeria?.map((element, index) => (
                  <div className="col-xs-12 col-md-4">
                    <img className="imagen-galeria" src={element} />
                  </div>
                ))}
              </div> */}
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
};
