import { yupResolver } from "@hookform/resolvers/yup";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View, Text } from "react-native";
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
import { Input2 } from "../../components/Input2";
import { SearchBar } from "../../components/SearchBar";
import { Select } from "../../components/Select";
import { navigate } from "../../routes/RootNavigation";
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
  const [id, setId] = useState(null);
  // useEffect(() => {
  //   handleGetAllUsers();
  // }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      role: {},
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, role } = data;

    const user = {
      name,
      email,
      role,
    };

    console.log("57");
    handleEditUser(id, user);
    console.log(data);

    handleGetAllUsers();
  };

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
                          setId(item.id_user);
                        }
                        // handleEditUser(item.id, { ...item, role: "bananinha" })
                      }
                    />
                  </>
                )}
              />
              {editable && id === item.id_user ? (
                <View>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input2
                        mode="outlined"
                        onBlur={onBlur}
                        label="Digite o novo nome"
                        onChangeText={onChange}
                        error={errors.name}
                        style={{
                          marginTop: "3%",
                        }}
                      />
                    )}
                  />
                  {errors.name ? (
                    <Text style={{ color: "red" }}>{errors.name?.message}</Text>
                  ) : null}

                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input2
                        mode="outlined"
                        onBlur={onBlur}
                        label="Digite o novo e-mail"
                        onChangeText={onChange}
                        error={errors.email}
                        style={{
                          marginTop: "3%",
                        }}
                      />
                    )}
                  />
                  {errors.email ? (
                    <Text style={{ color: "red" }}>
                      {errors.email?.message}
                    </Text>
                  ) : null}

                  <Controller
                    name="role"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Picker
                        mode="dropdown"
                        onBlur={onBlur}
                        selectedValue={value}
                        onValueChange={onChange}
                        style={{
                          marginTop: "3%",
                          borderWidth: 2,
                          borderColor: "red",
                        }}
                      >
                        <Picker.Item
                          label="Selecione um novo papel"
                          value="User"
                          enabled={false}
                          style={{ color: colors.placeholder }}
                        />
                        <Picker.Item label="Normal" value={3} />
                        <Picker.Item label="Administrador" value={2} />
                      </Picker>
                    )}
                  />

                  <Button
                    onPress={() => {
                      handleSubmit(onSubmit);
                      //lembra que se os dados na pagina precisarem ser pegos novamente, da pra chamar a função no próprio onclick sem precisar de um useEffect;
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
