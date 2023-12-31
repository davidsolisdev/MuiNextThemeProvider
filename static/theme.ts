"use client";
import components from "../componentsConfig";
import { createTheme } from "@mui/material/styles";

// Types
import type { Theme, ThemeOptions } from "@mui/material/styles/createTheme";
import type { TypographyOptions } from "@mui/material/styles/createTypography";
type FontsTheme = {
  titulos: string;
  subTitulos: string;
  parrafos: string;
  botones: string;
  caption: string;
};

const themeFonts: FontsTheme = {
  titulos: "var(--titles)",
  subTitulos: "var(--subtitles)",
  parrafos: "var(--paragraph)",
  botones: "var(--button)",
  caption: "var(--caption)",
};

const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: themeFonts.parrafos,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: themeFonts.titulos,
    fontWeight: "var(--h1-font-weight)",
    fontSize: "var(--h1-font-size)",
    lineHeight: "var(--h1-line-height)",
  },
  h2: {
    fontFamily: themeFonts.titulos,
    fontWeight: "var(--h2-font-weight)",
    fontSize: "var(--h2-font-size)",
    lineHeight: "var(--h2-line-height)",
  },
  h3: {
    fontFamily: themeFonts.titulos,
    fontWeight: "var(--h3-font-weight)",
    fontSize: "var(--h3-font-size)",
    lineHeight: "var(--h3-line-height)",
  },
  h4: {
    fontFamily: themeFonts.titulos,
    fontWeight: "var(--h4-font-weight)",
    fontSize: "var(--h4-font-size)",
    lineHeight: "var(--h4-line-height)",
  },
  h5: {
    fontFamily: themeFonts.titulos,
    fontWeight: "var(--h5-font-weight)",
    fontSize: "var(--h5-font-size)",
    lineHeight: "var(--h5-line-height)",
  },
  h6: {
    fontFamily: themeFonts.titulos,
    fontWeight: "var(--h6-font-weight)",
    fontSize: "var(--h6-font-size)",
    lineHeight: "var(--h6-line-height)",
  },
  subtitle1: {
    fontFamily: themeFonts.subTitulos,
    fontWeight: "var(--subtitle1-font-weight)",
    fontSize: "var(--subtitle1-font-size)",
    lineHeight: "var(--subtitle1-line-height)",
  },
  subtitle2: {
    fontFamily: themeFonts.subTitulos,
    fontWeight: "var(--subtitle2-font-weight)",
    fontSize: "var(--subtitle2-font-size)",
    lineHeight: "var(--subtitle2-line-height)",
  },
  body1: {
    fontFamily: themeFonts.parrafos,
    fontWeight: "var(--body1-font-weight)",
    fontSize: "var(--body1-font-size)",
    lineHeight: "var(--body1-line-height)",
  },
  body2: {
    fontFamily: themeFonts.parrafos,
    fontWeight: "var(--body2-font-weight)",
    fontSize: "var(--body2-font-size)",
    lineHeight: "var(--body2-line-height)",
  },
  button: {
    fontFamily: themeFonts.botones,
    fontWeight: "var(--button-font-weight)",
    fontSize: "var(--button-font-size)",
    lineHeight: "var(--button-line-height)",
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: themeFonts.caption,
    fontWeight: "var(--caption-font-weight)",
    fontSize: "var(--caption-font-size)",
    lineHeight: "var(--caption-line-height)",
  },
  overline: {
    fontFamily: themeFonts.parrafos,
    fontWeight: "var(--overline-font-weight)",
    fontSize: "var(--overline-font-size)",
    lineHeight: "var(--overline-line-height)",
  },
};

const myLightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    //colores para elementos
    primary: { main: "var(--primary)", contrastText: "var(--contrast-text)" },
    secondary: {
      main: "var(--secondary)",
      contrastText: "var(--contrast-text)",
    },
    info: { main: "var(--info)", contrastText: "var(--contrast-text)" },
    success: { main: "var(--success)", contrastText: "var(--contrast-text)" },
    warning: { main: "var(--warning)", contrastText: "var(--contrast-text)" },
    error: { main: "var(--error)", contrastText: "var(--contrast-text)" },
    common: { black: "var(--common-black)", white: "var(--common-white)" },
    // color de textos
    text: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      disabled: "var(--text-disabled)",
    },
    // Color de los Dividers
    divider: "var(--divider)",
    // Color del fondo para contenedores
    background: {
      default: "var(--default)",
      paper: "var(--paper)",
    },
  },
  typography,
  components,
};

const myDarkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    //colores para elementos
    primary: {
      main: "var(--primary-dark)",
      contrastText: "var(--contrast-text-dark)",
    },
    secondary: {
      main: "var(--secondary-dark)",
      contrastText: "var(--contrast-text-dark)",
    },
    info: {
      main: "var(--info-dark)",
      contrastText: "var(--contrast-text-dark)",
    },
    success: {
      main: "var(--success-dark)",
      contrastText: "var(--contrast-text-dark)",
    },
    warning: {
      main: "var(--warning-dark)",
      contrastText: "var(--contrast-text-dark)",
    },
    error: {
      main: "var(--error-dark)",
      contrastText: "var(--contrast-text-dark)",
    },
    common: {
      black: "var(--common-black)",
      white: "var(--common-white)",
    },
    //colores para textos
    text: {
      primary: "var(--text-primary-dark)",
      secondary: "var(--text-secondary-dark)",
      disabled: "var(--text-disabled-dark)",
    },
    // Color de los Dividers
    divider: "var(--divider-dark)",
    // Color de fondo para contenedores
    background: {
      default: "var(--default-dark)",
      paper: "var(--paper-dark)",
    },
  },
  typography,
  components,
};

export const lightTheme: Theme = createTheme(myLightTheme);
export const darkTheme: Theme = createTheme(myDarkTheme);
