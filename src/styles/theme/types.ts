import { Fonts } from "../fonts";

export type Theme = {
  dark: boolean;
  mode?: "adaptive" | "exact";
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onSurface: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
  };
  fonts: Fonts;
  animation: {
    scale: number;
  };
};
