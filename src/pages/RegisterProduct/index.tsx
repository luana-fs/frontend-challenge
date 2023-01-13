import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { View } from "react-native";
import {
  Headline,
  useTheme,
  Text,
  Button as PaperButton,
} from "react-native-paper";
import { BarCodeScannerComponent } from "../../components/BarCodeScanner";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { Select } from "../../components/Select";
import { navigate } from "../../routes/RootNavigation";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";
import { Input2 } from "../../components/Input2";
import { idGenerator } from "../../services/idGenerator";

const schema = yup
  .object({
    productName: yup.string().required("Informe o produto"),
    category: yup.string().required("Informe a categoria do produto"),
    barCode: yup.string().required("Informe ou escaneie o código do produto"),
  })
  .required();

export default function RegisterProduct({
  data: {
    states: { loading, userInfo },
    handlers: { handleCreateProduct },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  const [scan, setScan] = useState(false);
  const [code, setCode] = useState("");

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      productName: "",
      category: {},
      barCode: code ? code : "",
    },
  });

  const onSubmit = (data) => {
    const { productName, category, barCode } = data;
    const product = {
      name: productName,
      category: Number(category),
      barCode,
      createdBy: userInfo.id_user,
    };
    handleCreateProduct(product);
    navigate("Produtos");
  };

  if (loading) <Loading />;

  return (
    <>
      <Header title={"RegisterProduct"} goBack />
      <View style={style.container}>
        <Headline>Cadastrar produto</Headline>

        <Controller
          control={control}
          rules={{ required: true }}
          name="productName"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input2
              mode="outlined"
              label="Nome do produto"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        {errors.productName ? (
          <Text style={{ color: "red" }}>{errors.productName?.message}</Text>
        ) : null}

        <Controller
          name="category"
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
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Picker.Item
                label="Selecione uma categoria"
                // value=""
                enabled={false}
                style={{ color: colors.placeholder }}
              />
              <Picker.Item label="Eletrônicos" value={1} />
              <Picker.Item label="Roupas" value={2} />
            </Picker>
          )}
        />

        {errors.category ? (
          <Text style={{ color: "red" }}>{errors.category?.message}</Text>
        ) : null}

        <View style={{ flex: 1 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="barCode"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input2
                mode="outlined"
                label="Código do produto"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType={"numeric"}
                multiline={true}
              />
            )}
          />
          {errors.barCode ? (
            <Text style={{ color: "red" }}>{errors.barCode?.message}</Text>
          ) : null}
          <PaperButton
            onPress={() => {
              setScan(!scan);
            }}
          >
            Escanear Código
          </PaperButton>
          {scan ? <BarCodeScannerComponent setBarCode={setValue} /> : null}
        </View>

        <Button buttonText="Cadastrar" onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
}
