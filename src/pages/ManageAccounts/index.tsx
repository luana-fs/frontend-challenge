import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { Button, Headline, useTheme } from "react-native-paper";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersListContext } from "../../contexts/UsersContext";

import * as RootNavigation from "../../routes/RootNavigation";
import { styles } from "./styles";

export default function ManageAccounts() {
  const { colors } = useTheme();
  const style = styles(colors);

  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <Header title={"Dashboard"} goBack />
      <View style={style.container}>
        <Headline>Gerenciar contas</Headline>
        <Button onPress={() => handleLogout()}>Logout</Button>
      </View>
    </>
  );
}
