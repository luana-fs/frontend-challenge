import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { Button, Headline, useTheme } from "react-native-paper";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersListContext } from "../../contexts/UsersContext";
import { styles } from "./styles";

import * as RootNavigation from "../../routes/RootNavigation";

export default function DashboardPage() {
  const { colors } = useTheme();
  const style = styles(colors);

  const { handleLogout } = useContext(AuthContext);

  //--fix it - receber lista em outro lugar, aqui foi só teste
  const { usersList, setUsersList } = useContext(UsersListContext);
  // console.log("dashborard - index.tsx", usersList);
  return (
    <>
      <Header title={"Dashboard"} goBack />
      <View style={style.container}>
        <Headline>Olá, Luana</Headline>
        <Button onPress={() => handleLogout()}>Logout</Button>
      </View>
    </>
  );
}
