import React from "react";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Card,
  Headline,
  IconButton,
  List,
  Paragraph,
  useTheme,
} from "react-native-paper";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersListContext } from "../../contexts/UsersContext";

import * as RootNavigation from "../../routes/RootNavigation";
import { styles } from "./styles";

export default function Products() {
  const { colors } = useTheme();
  const style = styles(colors);

  const {
    states: { productList },
  } = useContext(ProductContext);
  console.log("walk", productList);

  const renderItemList = productList.map((product) => {
    return (
      <Card key={product.id}>
        <Card.Title
          title={product.name}
          subtitle={`Código: ${product.barCode} ${"\n"} Categoria: ${
            product.category
          }`}
        />

        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Ver detalhes</Button>
        </Card.Actions>
      </Card>
    );
  });

  return (
    <>
      <Header title={"Dashboard"} goBack />
      <ScrollView style={style.container}>
        <Headline>Produtos</Headline>
        {renderItemList}
      </ScrollView>
    </>
  );
}
