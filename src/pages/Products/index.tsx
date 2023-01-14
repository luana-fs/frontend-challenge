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
  Button as NativeButton,
} from "react-native-paper";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ListIsEmptyContainer } from "../../components/ListIsEmptyContainer";
import { SearchBar } from "../../components/SearchBar";

import { ProductContext } from "../../contexts/ProductContext";
import { navigate } from "../../routes/RootNavigation";

import { styles } from "./styles";

export default function Products({
  data: {
    states: { searchQuery, productList },
    setters: { setSearchQuery },
  },
}: any) {
  const { colors } = useTheme();
  const style = styles(colors);

  const renderItemList = productList
    ?.filter(
      (product) =>
        searchQuery === "" || product?.name?.toLowerCase().includes(searchQuery)
    )
    .map((product) => {
      return (
        <Card>
          <Card.Title
            key={product?.id_product}
            title={product?.name}
            subtitle={`Código: ${product?.bar_code} ${"\n"} Categoria: ${
              product?.category
            }`}
          />

          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <PaperButton>Ver detalhes</PaperButton>
          </Card.Actions>
        </Card>
      );
    });

  return (
    <>
      <Header title={"Produtos"} goBack />
      <ScrollView style={style.container}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {productList.length ? (
          renderItemList
        ) : (
          <>
            <ListIsEmptyContainer text="Não há produtos cadastrados" />
            <NativeButton onPress={() => navigate("Cadastrar Produto")}>
              Cadastrar
            </NativeButton>
            {/* <Button
              buttonText={"Cadastrar"}
              onPress={() => navigate("Cadastrar Produto")}
            /> */}
          </>
        )}
      </ScrollView>
    </>
  );
}
