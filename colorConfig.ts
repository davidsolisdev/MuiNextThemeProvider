import type { PaletteOptions } from "@mui/material/styles";

export const lightColorsTheme: PaletteOptions = {
  mode: "light",
  primary: { main: "#19376d", contrastText: "#fff" },
  secondary: { main: "#4798d1", contrastText: "#fff" },
  info: { main: "#0277bd", contrastText: "#fff" },
  success: { main: "#388e3c", contrastText: "#fff" },
  warning: { main: "#f57c00", contrastText: "#fff" },
  error: { main: "#d32f2f", contrastText: "#fff" },
  divider: "rgba(0, 0, 0, 0.15)",
  text: {
    primary: "rgba(0,0,0,0.95)",
    secondary: "rgba(0,0,0,0.7)",
    disabled: "rgba(0,0,0,0.5)",
  },
  background: {
    default: "#f8fafc",
    paper: "#fff",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};

export const darkColorsTheme: PaletteOptions = {
  mode: "dark",
  primary: { main: "#19376d", contrastText: "#fff" },
  secondary: { main: "#4798d1", contrastText: "#fff" },
  info: { main: "#0277bd", contrastText: "#fff" },
  success: { main: "#388e3c", contrastText: "#fff" },
  warning: { main: "#f57c00", contrastText: "#fff" },
  error: { main: "#d32f2f", contrastText: "#fff" },
  divider: "rgba(255, 255, 255, 0.15)",
  text: {
    primary: "rgba(255, 255, 255, 0.95)",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255,, 0.5)",
  },
  background: {
    default: "#181a20",
    paper: "#333333",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};
