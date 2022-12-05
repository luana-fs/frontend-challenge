import React, { useState } from "react";
import { useContext } from "react";
import { View } from "react-native";
import { Button, Headline, useTheme } from "react-native-paper";
import { BarCodeScannerComponent } from "../../components/BarCodeScanner";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersListContext } from "../../contexts/UsersContext";

import * as RootNavigation from "../../routes/RootNavigation";
import { styles } from "./styles";

export default function RegisterProduct(props) {
  const { colors } = useTheme();
  const style = styles(colors);

  const { category, setCategory } = props.data;

  console.log(props);

  // const {
  //   handlers: { handleLogout },
  // } = useContext(AuthContext);

  return (
    <>
      <Header title={"RegisterProduct"} goBack />
      <View style={style.container}>
        <Headline>Cadastrar produto</Headline>

        <Input textLabel="Nome do produto" value="" />
        <Select
          data={[
            { name: "Roupas", onPress: () => setCategory("Roupas") },
            {
              name: "Eletrônicos",
              onPress: () => setCategory("Eletrônicos"),
            },
          ]}
          title={"Selecione a categoria"}
          role={category}
        />
        <BarCodeScannerComponent />
        <Button onPress={() => handleLogout()}>Logout</Button>
      </View>
    </>
  );
}
