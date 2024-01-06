import { create } from "zustand";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
  reconizeTheme: () => void;
}

type themeOptions = "light" | "dark";

function reconizeTheme(theme?: string | null): themeOptions {
  if (theme && theme.length > 3) return theme === "dark" ? "dark" : "light";

  // si el usuario aun no ha definido un tema, se le asigna el tema del sistema operativo
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function toggleTheme(theme?: themeOptions): themeOptions {
  // si el usuario envia un tema, se asigna dicho tema
  if (theme) {
    if (theme === "dark") document.querySelector("html")!.classList.add("dark");
    else document.querySelector("html")!.classList.remove("dark");
    return theme;
  }

  // si el usuario no envia un tema y no existe tema guardado, se le guarda el tema del sistema operativo
  if (!localStorage.getItem("theme")) {
    reconizeTheme() === "dark"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  }

  // si el usuario no envia un tema y su tema actual es dark, se cambia a light
  if (reconizeTheme(localStorage.getItem("theme")) === "dark") {
    localStorage.setItem("theme", "light");
    document.querySelector("html")!.classList.remove("dark");
    return "light";
  }

  // si el usuario no envia un tema y su tema actual es light, se cambia a dark
  localStorage.setItem("theme", "dark");
  document.querySelector("html")!.classList.add("dark");
  return "dark";
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "dark",
  toggleTheme: () => set({ theme: toggleTheme() }),
  reconizeTheme: () =>
    set({ theme: toggleTheme(reconizeTheme(localStorage.getItem("theme"))) }),
}));
