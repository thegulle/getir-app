import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { Router } from './router';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {Router}
    </ThemeProvider>
  );
}