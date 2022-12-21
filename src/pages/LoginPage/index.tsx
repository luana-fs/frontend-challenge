import { Link } from "@react-navigation/native";
import React, { useContext } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { Title } from "../../components/Title";
import { LoadingContext } from "../../contexts/LoadingContext";
import { useForm, Controller } from "react-hook-form";

import { findUser } from "../../services/Users";
import { styles } from "./styles";

export default function LoginPage({
  data: {
    states: { email, password },
    setters: { onChangeEmail, onChangePassword },
    handlers: { handleLogin },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  const { loading } = useContext(LoadingContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  if (loading) return <Loading />;

  return (
    <View style={style.container}>
      <Title text={"Login"} />

      <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            textLabel="E-mail"
            placeholder="Digite seu email"
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Button
        buttonText="ok"
        onPress={handleSubmit((data) => console.log(data))}
      />
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
      <Text style={style.textToCenter}>
        ou
        <Link to={{ screen: "SignInPage" }}> Cadastre-se</Link>
      </Text>
    </View>
  );
}
