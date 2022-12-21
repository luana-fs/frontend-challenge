import React from "react";
import { View } from "react-native";
import { Caption, useTheme } from "react-native-paper";
import { styles } from "./styles";

export const ListIsEmptyContainer = ({ text }: any) => {
  const { colors } = useTheme();
  const style = styles(colors);
  return (
    <View style={style.main}>
      <Caption>{text}</Caption>
    </View>
  );
};
