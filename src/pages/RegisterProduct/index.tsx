import React from "react";
import { View } from "react-native";
import {
  Button,
  Headline,
  useTheme,
  Text,
  TextInput,
} from "react-native-paper";
import { BarCodeScannerComponent } from "../../components/BarCodeScanner";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import { styles } from "./styles";

export default function RegisterProduct({
  data: {
    contexts: { productContext, authContext },
    states: { productName, barCode, category, barCodeScanned },
    setters: {
      setCategory,
      setCreatedBy,
      onChangeProductName,
      onChangeBarCode,
      setBarCodeScan,
    },
  },
}: any) {
  const {
    handlers: { handleGetAllProducts, handleCreateProduct },
  } = productContext;

  const {
    handlers: { handleLogout },
  } = authContext;

  const { colors } = useTheme();
  const style = styles(colors);

  console.log("40", barCodeScanned);

  return (
    <>
      <Header title={"RegisterProduct"} goBack />
      <View style={style.container}>
        <Headline>Cadastrar produto</Headline>

        <Input
          textLabel="Nome do produto"
          value={productName}
          onChange={onChangeProductName}
        />
        <Select
          data={[
            { name: "Roupas", onPress: () => setCategory("Roupas") },
            {
              name: "Eletrônicos",
              onPress: () => setCategory("Eletrônicos"),
            },
          ]}
          title={!category ? "Selecione a categoria" : category}
          role={category}
        />
        {/* <Button onPress={() => setActivateBarScan}>a</Button> */}
        {productName && category ? (
          <>
            <BarCodeScannerComponent setBarCodeScan={setBarCodeScan} />
            <Text>Ou digite o código</Text>

            <Input
              textLabel="Digite o código"
              //fix it - depois de scaneado não podemos mudar o codigo
              value={barCode ? barCode : barCodeScanned}
              onChange={onChangeBarCode}
              keyboardType="numeric"
              multiline={true}
              // numberOfLines={3}
              underlineStyle={"red"}
              outlineStyle={{ borderColor: "red" }}
              flat
            />
          </>
        ) : null}

        {/* <Button
          onPress={() =>
            handleCreateProduct({
              id: "2345",
              name: "tomate",
              category: "Roupas",
              barCode: "900909",
              createdyBy: {
                id: "jojp290kj3i3jo",
                name: "lua",
                email: "lua@deliver",
                role: "User",
              },
            })
          }
        >
          Criar
        </Button> */}
        <Button>Cadastrar</Button>
      </View>
    </>
  );
}
