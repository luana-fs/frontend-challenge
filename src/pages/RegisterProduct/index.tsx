import React from "react";
import { View } from "react-native";
import { Headline, useTheme, Text, TextInput } from "react-native-paper";
import { BarCodeScannerComponent } from "../../components/BarCodeScanner";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { navigate } from "../../routes/RootNavigation";

import { styles } from "./styles";

export default function RegisterProduct({
  data: {
    contexts: { productContext, authContext },
    states: { productName, category, barCodeScanned },
    setters: { setCategory, setCreatedBy, onChangeProductName, setBarCodeScan },
    handlers: { createProduct },
  },
  ...rest
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

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

        {productName && category ? (
          <>
            <BarCodeScannerComponent setBarCodeScan={setBarCodeScan} />
            <Text>Ou digite o código</Text>

            <Input
              textLabel="Digite o código"
              value={barCodeScanned}
              onChange={(target) => setBarCodeScan(target.text)}
              keyboardType={"numeric"}
              multiline={true}
              underlineStyle={"red"}
              outlineStyle={{ borderColor: "red" }}
              flat
            />
          </>
        ) : null}

        {productName && category && barCodeScanned ? (
          <Button
            buttonText="Cadastrar"
            onPress={() => {
              createProduct();
              navigate("Dashboard");
            }}
          />
        ) : null}
      </View>
    </>
  );
}
