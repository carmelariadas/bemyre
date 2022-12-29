import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import injectContext from "./store/appContext";

// >>> components >>>>
import Navbar from "./component/navbar/Navbar.js";
import BrainStorm from "./pages/SandBox.js";
import { LandingPage } from "./pages/landingpage";
import { Profile } from "./pages/profile.js";
import { Login } from "./pages/Login.js";
import { Signup } from "./pages/Signup.js";
import { BandProfile } from "./pages/BandProfile.js";
import { Footer } from "./component/Footer.jsx";

// <<< components <<<<

//create your first component
const Layout = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="">
      <BrowserRouter basename={basename}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route element={<LandingPage />} path="/" />
            <Route element={<LandingPage />} path="/lp" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Profile />} path="user/:username" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<BandProfile />} exact path="/bandprofile/:id" />
            <Route element={<BrainStorm />} path="/sandbox" />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
