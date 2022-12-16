import React, { useState } from "react";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import {
  Button as PaperButton,
  Card,
  Headline,
  useTheme,
  Text,
  Subheading,
} from "react-native-paper";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";

import { ProductContext } from "../../contexts/ProductContext";
import { navigate } from "../../routes/RootNavigation";

import { styles } from "./styles";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  const { colors } = useTheme();
  const style = styles(colors);

  const {
    states: { productList },
  } = useContext(ProductContext);

  const renderItemList = productList.length ? (
    productList
      .filter(
        (product) =>
          searchQuery === "" ||
          product?.name.toLowerCase().includes(searchQuery)
      )
      .map((product) => {
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
              <PaperButton>Ver detalhes</PaperButton>
            </Card.Actions>
          </Card>
        );
      })
  ) : (
    <>
      <Subheading>Cadastre o primeiro produto!</Subheading>
      <Button
        buttonText={"Cadastrar"}
        onPress={() => navigate("Cadastrar Produto")}
      />
    </>
  );

  return (
    <>
      <Header title={"Cadastrar Produto"} goBack />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView style={style.container}>
        <Headline>Produtos</Headline>
        {renderItemList}
      </ScrollView>
    </>
  );
}
