import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export default function DashboardPage() {
  const { colors } = useTheme();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <Header title={"Dashboard"} goBack />
    </View>
  );
}
