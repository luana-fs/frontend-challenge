import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { Button, Headline, useTheme } from "react-native-paper";
import { BarCodeScannerComponent } from "../../components/BarCodeScanner";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersListContext } from "../../contexts/UsersContext";

import * as RootNavigation from "../../routes/RootNavigation";
import { styles } from "./styles";

export default function RegisterProduct() {
  const { colors } = useTheme();
  const style = styles(colors);

  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <Header title={"RegisterProduct"} goBack />
      <View style={style.container}>
        <Headline>Cadastrar produto</Headline>
        <BarCodeScannerComponent />
        <Button onPress={() => handleLogout()}>Logout</Button>
      </View>
    </>
  );
}
