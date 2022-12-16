import React, { useEffect } from "react";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Headline,
  IconButton,
  List,
  Surface,
  useTheme,
} from "react-native-paper";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersListContext } from "../../contexts/UsersContext";

import * as RootNavigation from "../../routes/RootNavigation";
import { styles } from "./styles";

export default function ManageAccounts() {
  const { colors } = useTheme();
  const style = styles(colors);

  const {
    states: { usersList },
    handlers: { handleGetAllUsers },
  } = useContext(UsersListContext);
  console.log("Lista de usurarios", usersList);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const renderAccountsList = usersList.map((item) => {
    return (
      <Surface
        style={{
          padding: 8,
          marginTop: 8,
          elevation: 2,
        }}
      >
        <List.Item
          title={item.name}
          description={`${item.email} \n${item.role}`}
          left={(props) => <List.Icon {...props} icon="account" />}
          right={(props) => (
            <>
              <IconButton
                icon="account-edit"
                size={28}
                onPress={() => console.log("editar")}
              />
            </>
          )}
        />
      </Surface>
    );
  });

  return (
    <>
      <Header title={"Dashboard"} goBack />
      <ScrollView style={style.container}>
        <Headline>Gerenciar contas</Headline>
        {renderAccountsList}
      </ScrollView>
    </>
  );
}
