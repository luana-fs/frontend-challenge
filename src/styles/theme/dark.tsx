import light from "./light";
import { purple, pink, gray } from "../colors";
import type { Theme } from "./types";

const DarkTheme: Theme = {
  ...light,
  dark: true,
  mode: "adaptive",
  colors: {
    ...light.colors,
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
