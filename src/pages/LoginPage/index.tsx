import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { styles } from "./styles";

export default function LoginPage() {
  const { colors } = useTheme();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <Title text={"Login"} />
      <Input textLabel="E-mail" placeholder="Digite seu email" />
      <Input password />
      <Button buttonText="Entrar" onPress={() => console.log("clicou")} />
    </View>
  );
}
