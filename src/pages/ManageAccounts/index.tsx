import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Divider,
  Headline,
  IconButton,
  List,
  TextInput,
  useTheme,
} from "react-native-paper";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SearchBar } from "../../components/SearchBar";
import { Select } from "../../components/Select";
import { styles } from "./styles";

export default function ManageAccounts({
  data: {
    states: { usersList, searchQuery },
    setters: { setSearchQuery },
    handlers: { handleEditUser, handleGetAllUsers },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  //esse aqui só usa quando o input é o meu feito por mim... inputs do paper faz usestate normal
  // const { value: name, onChange: onChangeName } = useInput("");
  const [editable, setEditable] = useState(false);
  const [id, setId] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Selecione o papel");

  const renderAccountsList = usersList.length
    ? usersList
        .filter(
          (user) =>
            searchQuery === "" || user?.name.toLowerCase().includes(searchQuery)
        )
        .map((item) => {
          return (
            <>
              <List.Item
                key={item.id}
                title={item.name}
                description={`${item.email} \n${item.role}`}
                left={(props) => <List.Icon {...props} icon="account" />}
                right={(props) => (
                  <>
                    <IconButton
                      icon="account-edit"
                      size={28}
                      //FIX IT - colocar input ao expandir a lista pra pegar novos valores
                      onPress={
                        () => {
                          setEditable(!editable);
                          setId(item.id);
                        }
                        // handleEditUser(item.id, { ...item, role: "bananinha" })
                      }
                    />
                  </>
                )}
              />
              {editable && id === item.id ? (
                <View>
                  <TextInput
                    textLabel="Nome"
                    label="Digite o novo nome"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={{
                      padding: 0,

                      paddingLeft: 6,
                      marginTop: 5,
                    }}
                  />
                  <TextInput
                    label={"Digite o novo e-mail"}
                    textLabel="Digite o novo e-mail"
                    placeholder="Digite o novo e-mail"
                    value={email}
                    //PAREI AQUI - onchange nao pega valor do input (PQ)
                    onChangeText={(text) => setEmail(text)}
                    style={{
                      padding: 0,

                      paddingLeft: 6,
                      borderRadius: 0,
                      marginTop: 10,
                    }}
                  />
                  <Select
                    data={[
                      { name: "User", onPress: () => setRole("User") },
                      { name: "Admin", onPress: () => setRole("Admin") },
                      {
                        name: "SuperAdmin",
                        onPress: () => setRole("SuperAdmin"),
                      },
                    ]}
                    title="Selecione o novo papel"
                    role={role}
                    style={{ padding: 0, paddingLeft: 6, height: 35 }}
                  />
                  <Button
                    onPress={() => {
                      handleEditUser(item.id, { ...item, name, email, role });
                      //lembra que se os dados na pagina precisarem ser pegos novamente, da pra chamar a função no próprio onclick sem precisar de um useEffect
                      handleGetAllUsers();
                      setEditable(false);
                    }}
                  >
                    Atualizar
                  </Button>
                  <Divider />
                </View>
              ) : null}
            </>
          );
        })
    : null;

  return (
    <>
      <Header title={"Dashboard"} goBack />
      <ScrollView style={style.container}>
        <Headline>Gerenciar contas</Headline>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {renderAccountsList}
      </ScrollView>
    </>
  );
}
