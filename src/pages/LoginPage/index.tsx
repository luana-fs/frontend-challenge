import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { styles } from "./styles";
import { LoginPageProps } from "./types";

export default function LoginPage(props: LoginPageProps) {
  const { colors } = useTheme();
  const style = styles(colors);
  console.log(props);
  return (
    <View style={style.container}>
      <Title text={"Login"} />
      <Input textLabel="E-mail" placeholder="Digite seu email" />
      <Input password />
      <Button buttonText="Entrar" onPress={() => console.log("clicou")} />
    </View>
  );
}
