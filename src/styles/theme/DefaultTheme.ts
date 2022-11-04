import { purple, pink, gray } from "../colors";
import configureFonts from "../fonts";
import type { Theme } from "./types";

const DefaultTheme: Theme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: "#6200ee",
    accent: "#03dac4",
    background: "#f6f6f6",
    surface: "#fff",
    error: "#B00020",
    text: "#121212",
    onSurface: "#000000",
    disabled: gray,
    placeholder: purple,
    backdrop: "#121212",
    notification: pink,
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

export default DefaultTheme;
