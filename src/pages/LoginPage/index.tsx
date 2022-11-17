import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { navigate } from "../../routes/RootNavigation";
import { styles } from "./styles";
import { LoginPageProps } from "./types";

export default function LoginPage(props: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  const {
    data: {
      email,
      onChangeEmail,
      password,
      onChangePassword,
      handleLogin,
      findUser,
    },
  } = props;

  return (
    <View style={style.container}>
      <Title text={"Login"} />
      <Input
        textLabel="E-mail"
        placeholder="Digite seu email"
        value={email}
        onChange={onChangeEmail}
      />
      <Input password value={password} onChange={onChangePassword} />
      <Button
        buttonText="Entrar"
        onPress={() =>
          handleLogin({ email: email, password: password }, findUser)
        }
      />
      <Text>
        ou
        <Link to={{ screen: "SignInPage" }}>Cadastre-se</Link>
      </Text>
    </View>
  );
}
