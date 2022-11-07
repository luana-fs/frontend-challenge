import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { styles } from "./styles";

export default function SignInPage() {
  const { colors } = useTheme();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <Title text={"Cadastre-se"} />
      <Input textLabel="E-mail" placeholder="Digite seu e-mail" />
      <Input password placeholder="Digite sua senha" />
      <Input textLabel="Senha" placeholder="Repita sua senha" password />
      <Select
        title={"Selecione o tipo de usuário"}
        data={[
          { name: "Normal", onPress: () => console.log("oi") },
          { name: "Admin", onPress: () => console.log("oi") },
        ]}
      />
      <Button buttonText="Cadastrar" onPress={() => console.log("clicou")} />
    </View>
  );
}
