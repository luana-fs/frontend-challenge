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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { findUser } from "../../services/Users";
import { styles } from "./styles";
import { Input2 } from "../../components/Input2";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Informe seu e-mail"),
    password: yup
      .string()
      .required("Informe sua senha ")
      .min(6, "A senha deve ter ao menos 6 caracteres"),
  })
  .required();

export default function LoginPage({
  data: {
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
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
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
          <Input2
            mode="outlined"
            onBlur={onBlur}
            label="Digite seu e-mail"
            onChangeText={onChange}
            error={errors.email}
            style={{
              marginTop: "3%",
            }}
          />
        )}
      />
      {errors.email ? (
        <Text style={{ color: "red" }}>{errors.email?.message}</Text>
      ) : null}

      <Controller
        control={control}
        rules={{ required: true }}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input2
            mode="outlined"
            password
            label="Senha"
            onBlur={onBlur}
            textLabel="Senha"
            placeholder="Digite sua senha"
            value={value}
            error={errors.password}
            onChangeText={onChange}
            secureTextEntry={true}
          />
        )}
      />
      {errors.password ? (
        <Text style={{ color: "red" }}>{errors.password?.message}</Text>
      ) : null}

      <Button
        buttonText="Entrar"
        onPress={handleSubmit((data) =>
          handleLogin({ email: data.email, password: data.password }, findUser)
        )}
      />
      <Text style={style.textToCenter}>
        ou
        <Link to={{ screen: "SignInPage" }}> Cadastre-se</Link>
      </Text>
    </View>
  );
}
