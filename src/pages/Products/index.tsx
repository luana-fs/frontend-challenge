import React, { useState } from "react";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import { Button, Card, Headline, useTheme } from "react-native-paper";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";

import { ProductContext } from "../../contexts/ProductContext";

import { styles } from "./styles";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  const { colors } = useTheme();
  const style = styles(colors);

  const {
    states: { productList },
  } = useContext(ProductContext);
  console.log("walk", productList);

  const renderItemList = productList
    .filter(
      (product) =>
        searchQuery === "" || product.name?.toLowerCase().includes(searchQuery)
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
            <Button>Ver detalhes</Button>
          </Card.Actions>
        </Card>
      );
    });

  return (
    <>
      <Header title={"Dashboard"} goBack />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView style={style.container}>
        <Headline>Produtos</Headline>
        {renderItemList}
      </ScrollView>
    </>
  );
}
