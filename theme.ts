"use client";
import { createTheme } from "@mui/material/styles";

// Types
import type { Components } from "@mui/material/styles/components";
import type { Theme, ThemeOptions } from "@mui/material/styles/createTheme";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

const fuentes = {
  titulos: "var(--arvo-font)",
  subTitulos: "var(--arvo-font)",
  parrafos: "var(--roboto-font)",
  botones: "var(--spaceMono-font)",
  caption: "var(--roboto-font)",
};

const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontFamily: fuentes.parrafos,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: fuentes.titulos,
    fontWeight: 500,
    fontSize: "3.5rem",
    lineHeight: 1.167,
  },
  h2: {
    fontFamily: fuentes.titulos,
    fontWeight: 500,
    fontSize: "3rem",
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: fuentes.titulos,
    fontWeight: 500,
    fontSize: "2.6rem",
    lineHeight: 1.167,
  },
  h4: {
    fontFamily: fuentes.titulos,
    fontWeight: 500,
    fontSize: "2.1rem",
    lineHeight: 1.235,
  },
  h5: {
    fontFamily: fuentes.titulos,
    fontWeight: 500,
    fontSize: "1.6rem",
    lineHeight: 1.334,
  },
  h6: {
    fontFamily: fuentes.titulos,
    fontWeight: 500,
    fontSize: "1.3rem",
    lineHeight: 1.6,
  },
  subtitle1: {
    fontFamily: fuentes.subTitulos,
    fontWeight: 400,
    fontSize: "1.15rem",
    lineHeight: 1.75,
  },
  subtitle2: {
    fontFamily: fuentes.subTitulos,
    fontWeight: 500,
    fontSize: "0.95rem",
    lineHeight: 1.57,
  },
  body1: {
    fontFamily: fuentes.parrafos,
    fontWeight: 100,
    fontSize: "1.05rem",
    lineHeight: 1.5,
  },
  body2: {
    fontFamily: fuentes.parrafos,
    fontWeight: 100,
    fontSize: "0.9rem",
    lineHeight: 1.43,
  },
  button: {
    fontFamily: fuentes.botones,
    fontWeight: 800,
    fontSize: "0.9rem",
    lineHeight: 1.75,
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: fuentes.caption,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  overline: {
    fontFamily: fuentes.parrafos,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2.66,
  },
};

const components: Components = {};

const myLightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    //colores para elementos
    primary: { main: "#19376d", contrastText: "#fff" },
    secondary: { main: "#4798d1", contrastText: "#fff" },
    info: { main: "#0277bd", contrastText: "#fff" },
    success: { main: "#388e3c", contrastText: "#fff" },
    warning: { main: "#f57c00", contrastText: "#fff" },
    error: { main: "#d32f2f", contrastText: "#fff" },
    common: { black: "#000", white: "#fff" },
    // color de textos
    text: {
      primary: "rgba(0,0,0,0.95)",
      secondary: "rgba(0,0,0,0.7)",
      disabled: "rgba(0,0,0,0.5)",
    },
    // Color de los Dividers
    divider: "rgba(0, 0, 0, 0.15)",
    // Color del fondo para contenedores
    background: {
      default: "#f8fafc",
      paper: "#fff",
    },
  },
  typography,
  components,
};

const myDarkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    //colores para elementos
    primary: { main: "#19376d", contrastText: "#fff" },
    secondary: { main: "#4798d1", contrastText: "#fff" },
    info: { main: "#0277bd", contrastText: "#fff" },
    success: { main: "#388e3c", contrastText: "#fff" },
    warning: { main: "#f57c00", contrastText: "#fff" },
    error: { main: "#d32f2f", contrastText: "#fff" },
    common: { black: "#000", white: "#fff" },
    //colores para textos
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255,, 0.5)",
    },
    // Color de los Dividers
    divider: "rgba(255, 255, 255, 0.15)",
    // Color de fondo para contenedores
    background: {
      default: "#181a20",
      paper: "#333333",
    },
  },
  typography,
  components,
};

export const lightTheme: Theme = createTheme(myLightTheme);
export const darkTheme: Theme = createTheme(myDarkTheme);
