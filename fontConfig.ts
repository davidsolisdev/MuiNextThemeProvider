import { Roboto, Arvo, Space_Mono } from "next/font/google";
import { ThemeFonts } from "./static/theme";

const robotoFont = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--roboto-font",
});
const arvoFont = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--arvo-font",
});
const spaceMonoFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--spaceMono-font",
});

// fonts for app/layout.tsx
const fontConstants = `${robotoFont.variable} ${arvoFont.variable} ${spaceMonoFont.variable}`;
export default fontConstants;

// fonts for MUI Theme
export const themeFonts: ThemeFonts = {
  titles: "var(--arvo-font)",
  subTitles: "var(--arvo-font)",
  paragraph: "var(--roboto-font)",
  button: "var(--spaceMono-font)",
  caption: "var(--roboto-font)",
};
