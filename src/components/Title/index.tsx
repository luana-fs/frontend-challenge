import React from "react";
import { Text, useTheme } from "react-native-paper";
import { styles } from "./styles";
import { TitleProps } from "./types";

export const Title = ({ text }: TitleProps) => {
  const { colors } = useTheme();
  const style = styles(colors);

  return <Text style={style.title}>{text}</Text>;
};
