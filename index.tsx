"use client";
import { ThemeProvider as Provider } from "@mui/material/styles";
//import CssBaseline from "@mui/material/CssBaseline";

import { useThemeStore } from "./themeStore";
import { lightTheme, darkTheme } from "./theme";
import NextAppDirEmotionCacheProvider from "./emotionCache";

export default function ThemeProvider({ children }: any) {
  const { theme } = useThemeStore();

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <Provider theme={theme == "dark" ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        {children}
      </Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
