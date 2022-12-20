import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { navigate } from "../../routes/RootNavigation";
import { findUser } from "../../services/Users";
import { styles } from "./styles";

export default function SignInPage({
  data: {
    states: { name, email, password, confirmPassword, role },
    setters: {
      onChangeName,
      onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      setRole,
    },
    handlers: { handleSignIn },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  return (
    <View style={style.container}>
      <Title text={"Cadastre-se"} />
      <Input
        textLabel="Nome"
        placeholder="Digite seu nome"
        onChange={onChangeName}
        value={name}
      />
      <Input
        textLabel="E-mail"
        placeholder="Digite seu e-mail"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        password
        textLabel="Senha"
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
        onPress={() => {
          handleSignIn(
            { name, email, password, confirmPassword, role },
            findUser
          );
          navigate("LoginPage");
        }}
      />
    </View>
  );
}
