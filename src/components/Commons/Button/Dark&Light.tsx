"use client"
import React, { useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const DarkBtn = () => {
  // For Dark and light Mode button
  const [mode, setMode] = useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </ThemeProvider>
  );
};

export default DarkBtn;