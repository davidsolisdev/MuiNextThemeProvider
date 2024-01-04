# MUIThemeProvider

Nextjs +14 theme provider with zunstand, MUI and tailwindCSS

## Layout.tsx

import ThemeProvider from "@/providers/ThemeProvider";
import fontConstants from "@/providers/ThemeProvider/fontConfig";

...

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className={`${fontConstants}`}>
<ThemeProvider>
<body>{children}</body>
</ThemeProvider>
</html>
);
}

## globals.css

@import url("@/providers/ThemeProvider/fontConstants.css");

## tailwind.config.js

configurar exactamente como se ve en MUITailwindPlugin.ts
