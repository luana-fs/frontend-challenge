import React, { useContext } from "react";
import { View } from "react-native";
import {
  IconButton,
  List,
  Subheading,
  Surface,
  useTheme,
} from "react-native-paper";
import { Title } from "react-native-paper";
import { Header } from "../../components/Header";
import { UsersListContext } from "../../contexts/UsersContext";
import { styles } from "./styles";

export default function Solicitations() {
  const { colors } = useTheme();
  const style = styles(colors);

  const {
    states: { solicitationsList },
    handlers: { handleAcceptSolicitation },
  } = useContext(UsersListContext);

  const context = useContext(UsersListContext);

  const renderSolicitationsList = solicitationsList.map((item) => {
    return (
      <Surface
        style={{
          padding: 8,
          marginTop: 8,
          elevation: 2,
        }}
      >
        <List.Item
          key={item.id}
          title={item.name}
          description={item.email}
          left={(props) => <List.Icon {...props} icon="account" />}
          right={(props) => (
            <>
              <IconButton
                icon="close"
                color={"red"}
                size={20}
                onPress={() => console.log("Pressed")}
              />
              <IconButton
                icon="check"
                color={"green"}
                size={20}
                onPress={() => handleAcceptSolicitation(item)}
              />
            </>
          )}
        />
      </Surface>
    );
  });

  return (
    <>
      <Header title="Solicitações" goBack />
      <View style={style.container}>
        <Title>Solicitações</Title>
        <Subheading>
          Aceite ou recuse solicitações para usuários se tornarem
          administradores da loja.
        </Subheading>

        {renderSolicitationsList}
      </View>
    </>
  );
}
