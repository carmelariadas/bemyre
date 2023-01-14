import React, { useState } from "react";
import { useFormik } from "formik";
import {createLocalSchema} from "../../../esquemas/index"
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import {TextField} from "@mui/material";
import { ArchiveSharp } from "@mui/icons-material";



export const PublicLocal = () => {

  const [nombreLocal, setNombreLocal] = useState("");
  const [ubicacionLocal, setUbicacionLocal] = useState("");
  const [descripcionLocal, setDescripcionLocal] = useState("");

    const userName = sessionStorage.getItem('current_user')

  const publicar = async () => {
    const token = sessionStorage.getItem('access_token')
    const options  =  {
      method: "POST",
      headers: {"Content-Type": "application/json",  Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: nombreLocal,
      ubicacion_local: ubicacionLocal,
      description: descripcionLocal,
      city: 'Ares'
    })
    }
    await fetch(`${process.env.BACKEND_URL}/api/settings/${userName}/publiclocal`, options
)
    .then((resp)=> resp.json())
    .then((result) => console.log(result))
  }

  return (
    <>
    <Box sx={{marginX: "5rem", marginTop: "2rem", textAlign:"center"}}>
       <Typography variant="h3">Publica el estilo de tu local y conecta con tu público</Typography>
    </Box>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">CREAR</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">MODIFICAR</button>
    </li>
 
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <Box >
      <form className="editinfobox" sx={{gap:"1rem"}}>
        <TextField
            type='text'
            name='nombreLocal'
            variant='outlined'
            label='Nombre del local'
            onChange={(e) => setNombreLocal(e.target.value) }
            />
        <TextField
            type='text'
            name='ubicacionLocal'
            variant='outlined'
            label='Ubicación del local'
            onChange={(e) => setUbicacionLocal(e.target.value) }
            />
         <TextField
            type='text'
            name='descripcionLocal'
            variant='outlined'
            label='Descripción del local'
            onChange={(e) => setDescripcionLocal(e.target.value) }
            />
      
          <Button onClick={() => publicar()}>Publicar</Button>

      </form>
      </Box>

    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
    
  </div>
  </>
 
    );
};
