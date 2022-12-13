import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { findUser } from "../../services/Users";
import { styles } from "./styles";

export default function SignInPage({
  data: {
    states: { email, password, confirmPassword, role },
    setters: {
      onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      onChangeRole,
      setRole,
    },
    handlers: { handleSignIn },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  console.log("role", role);

  return (
    <View style={style.container}>
      <Title text={"Cadastre-se"} />
      <Input
        textLabel="E-mail"
        placeholder="Digite seu e-mail"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        password
        placeholder="Digite sua senha"
        onChange={onChangePassword}
        value={password}
      />
      <Input
        textLabel="Senha"
        placeholder="Repita sua senha"
        password
        onChange={onChangeConfirmPassword}
        value={confirmPassword}
      />

      <Select
        //FIX IT - role mudar para selectedOption
        role={role}
        title={"Selecione o tipo de usuário"}
        data={[
          { name: "User", onPress: () => setRole("User") },
          { name: "Admin", onPress: () => setRole("Admin") },
        ]}
      />
      <Button
        buttonText="Cadastrar"
        onPress={() =>
          handleSignIn({ email, password, confirmPassword, role }, findUser)
        }
      />
    </View>
  );
}
