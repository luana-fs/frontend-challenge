import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { navigate } from "../../routes/RootNavigation";
import { styles } from "./styles";
import { Input2 } from "../../components/Input2";
import { Select } from "../../components/Select";
import { Picker } from "@react-native-picker/picker";

const schema = yup
  .object({
    name: yup.string().required("Informe seu nome"),
    email: yup.string().email("E-mail inválido").required("Informe seu e-mail"),
    password: yup
      .string()
      .required("Informe sua senha")
      .min(6, "A senha deve ter ao menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .min(6, "A senha deve ter ao menos 6 caracteres"),
  })
  .required();

export default function SignInPage({
  data: {
    handlers: { handleSignIn },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      select: {},
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password, confirmPassword, select } = data;
    console.log("57");
    handleSignIn({
      name,
      email,
      password,
      confirmPassword,
      role: select,
    });
    console.log("65");

    navigate("LoginPage");
  };

  return (
    <View style={style.container}>
      <Title text={"Cadastre-se"} />

      <Controller
        control={control}
        rules={{ required: true }}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input2
            mode="outlined"
            onBlur={onBlur}
            label="Nome"
            placeholder="Digite seu nome"
            onChangeText={onChange}
            error={errors.name}
            style={{
              marginTop: "3%",
            }}
          />
        )}
      />
      {errors.email ? (
        <Text style={{ color: "red" }}>{errors.name?.message}</Text>
      ) : null}

      <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input2
            mode="outlined"
            onBlur={onBlur}
            label="E-mail"
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

      <Controller
        control={control}
        rules={{ required: true }}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input2
            mode="outlined"
            password
            label="Repita sua senha"
            onBlur={onBlur}
            placeholder="Repita sua senha"
            value={value}
            error={errors.confirmPassword}
            onChangeText={onChange}
            secureTextEntry={true}
          />
        )}
      />
      {errors.password ? (
        <Text style={{ color: "red" }}>{errors.confirmPassword?.message}</Text>
      ) : null}

      <Controller
        name="select"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            mode="dropdown"
            onBlur={onBlur}
            selectedValue={value}
            onValueChange={onChange}
            style={{
              marginTop: "3%",
              borderWidth: 2,
              borderColor: "red",
            }}
          >
            <Picker.Item
              label="Selecione um papel"
              value="User"
              enabled={false}
              style={{ color: colors.placeholder }}
            />
            <Picker.Item label="Normal" value={3} />
            <Picker.Item label="Administrador" value={2} />
          </Picker>
        )}
      />

      <Button buttonText="Cadastrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
