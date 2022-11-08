import React from "react";
import { View } from "react-native";
import { Headline, useTheme } from "react-native-paper";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { styles } from "./styles";

export default function DashboardPage() {
  const { colors } = useTheme();
  const style = styles(colors);
  return (
    <>
      <Header title={"Dashboard"} goBack />
      <View style={style.container}>
        <Headline>Olá, Luana</Headline>
      </View>
    </>
  );
}
