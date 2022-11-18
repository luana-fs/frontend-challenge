import React from "react";
import { useContext } from "react";
import { View } from "react-native";
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

  const { handleLogout } = useContext(AuthContext);

  const {
    states: { usersList },
  } = useContext(UsersListContext);
  console.log(usersList);

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
          description={item.email}
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
      <View style={style.container}>
        <Headline>Gerenciar contas</Headline>
        {renderAccountsList}
        <Button onPress={() => handleLogout()}>Logout</Button>
      </View>
    </>
  );
}
