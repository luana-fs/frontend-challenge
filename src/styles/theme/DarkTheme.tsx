import { purple, pink, gray } from "../colors";
import type { Theme } from "./types";
import DefaultTheme from "./DefaultTheme";

const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  mode: "adaptive",
  colors: {
    ...DefaultTheme.colors,
    primary: "#BB86FC",
    accent: "#03dac6",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
    onSurface: "#FFFFFF",
    text: "#FFF",
    disabled: gray,
    placeholder: "#fff",
    backdrop: "#121212",
    notification: pink,
  },
};

export default DarkTheme;
