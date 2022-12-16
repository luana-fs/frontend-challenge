import React, { useState } from "react";
import { Text } from "react-native";
import { Button as PaperButton, Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export const SearchBar = ({ searchQuery, setSearchQuery }: any) => {
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Procurar"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
