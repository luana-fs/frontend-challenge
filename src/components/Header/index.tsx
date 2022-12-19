import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import { styles } from "./styles";
import { HeaderProps } from "./types";

export const Header = ({ title, goBack, handleMore }: HeaderProps) => {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header>
      {goBack ? <Appbar.BackAction onPress={_goBack} /> : null}
      <Appbar.Content title={title} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {handleMore ? (
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      ) : null}
    </Appbar.Header>
  );
};
