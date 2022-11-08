import React from "react";
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
import { styles } from "./styles";

export default function Solicitations() {
  const { colors } = useTheme();
  const style = styles(colors);
  return (
    <>
      <Header title="Solicitações" goBack />
      <View style={style.container}>
        <Title>Solicitações</Title>
        <Subheading>
          Aceite ou recuse solicitações para usuários se tornarem
          administradores da loja.
        </Subheading>
        <Surface
          style={{
            padding: 8,
            marginTop: 8,
            elevation: 2,
          }}
        >
          <List.Item
            title="Luana Farias da Silva"
            description="luana.farias@deliverit.com"
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
                  onPress={() => console.log("Pressed")}
                />
              </>
            )}
          />
        </Surface>
      </View>
    </>
  );
}
