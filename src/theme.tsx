import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif'
  },
  palette: {
    primary: {
      main: "#C4C4C4"
    },
    secondary: {
      main: "#7E7E7E"
    }
  }
});

export const themeDecorator = (func: any) => (
  <ThemeProvider theme={theme}>{func()}</ThemeProvider>
);
