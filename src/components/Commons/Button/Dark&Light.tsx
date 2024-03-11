"use client"
import React, { useMemo, useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
  Theme
} from "@mui/material";



type Mode = 'light' | 'dark';


const DarkBtn = () => {
  // For Dark and light Mode button
  const [mode, setMode] = useState<Mode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo<Theme>(
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