import { Roboto, Arvo, Space_Mono } from "next/font/google";

const robotoFont = Roboto({
  weight: ["100", "300", "400", "700", "900"],
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

// fonts for app/Layout.tsx
const fontConstants = `${robotoFont.variable} ${arvoFont.variable} ${spaceMonoFont.variable}`;
export default fontConstants;
