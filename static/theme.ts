"use client";
import { themeFonts } from "../fontConfig";
import components from "../componentConfig";
import { createTheme } from "@mui/material/styles";
import { lightColorsTheme, darkColorsTheme } from "../colorConfig";

// Types
import type { Theme, ThemeOptions } from "@mui/material/styles/createTheme";
import type { TypographyOptions } from "@mui/material/styles/createTypography";
export type ThemeFonts = {
  titles: string;
  subTitles: string;
  paragraph: string;
  button: string;
  caption: string;
};

const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: themeFonts.paragraph,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: themeFonts.titles,
    fontWeight: "var(--h1-font-weight)",
    fontSize: "var(--h1-font-size)",
    lineHeight: "var(--h1-line-height)",
  },
  h2: {
    fontFamily: themeFonts.titles,
    fontWeight: "var(--h2-font-weight)",
    fontSize: "var(--h2-font-size)",
    lineHeight: "var(--h2-line-height)",
  },
  h3: {
    fontFamily: themeFonts.titles,
    fontWeight: "var(--h3-font-weight)",
    fontSize: "var(--h3-font-size)",
    lineHeight: "var(--h3-line-height)",
  },
  h4: {
    fontFamily: themeFonts.titles,
    fontWeight: "var(--h4-font-weight)",
    fontSize: "var(--h4-font-size)",
    lineHeight: "var(--h4-line-height)",
  },
  h5: {
    fontFamily: themeFonts.titles,
    fontWeight: "var(--h5-font-weight)",
    fontSize: "var(--h5-font-size)",
    lineHeight: "var(--h5-line-height)",
  },
  h6: {
    fontFamily: themeFonts.titles,
    fontWeight: "var(--h6-font-weight)",
    fontSize: "var(--h6-font-size)",
    lineHeight: "var(--h6-line-height)",
  },
  subtitle1: {
    fontFamily: themeFonts.subTitles,
    fontWeight: "var(--subtitle1-font-weight)",
    fontSize: "var(--subtitle1-font-size)",
    lineHeight: "var(--subtitle1-line-height)",
  },
  subtitle2: {
    fontFamily: themeFonts.subTitles,
    fontWeight: "var(--subtitle2-font-weight)",
    fontSize: "var(--subtitle2-font-size)",
    lineHeight: "var(--subtitle2-line-height)",
  },
  body1: {
    fontFamily: themeFonts.paragraph,
    fontWeight: "var(--body1-font-weight)",
    fontSize: "var(--body1-font-size)",
    lineHeight: "var(--body1-line-height)",
  },
  body2: {
    fontFamily: themeFonts.paragraph,
    fontWeight: "var(--body2-font-weight)",
    fontSize: "var(--body2-font-size)",
    lineHeight: "var(--body2-line-height)",
  },
  button: {
    fontFamily: themeFonts.button,
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
    fontFamily: themeFonts.paragraph,
    fontWeight: "var(--overline-font-weight)",
    fontSize: "var(--overline-font-size)",
    lineHeight: "var(--overline-line-height)",
  },
};

const myLightTheme: ThemeOptions = {
  palette: lightColorsTheme,
  typography,
  components,
};

const myDarkTheme: ThemeOptions = {
  palette: darkColorsTheme,
  typography,
  components,
};

export const lightTheme: Theme = createTheme(myLightTheme);
export const darkTheme: Theme = createTheme(myDarkTheme);
