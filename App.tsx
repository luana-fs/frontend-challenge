import React, { useContext, useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import { Routes } from "./src/routes";

import DefaultTheme from "./src/styles/theme/DefaultTheme";
import DarkTheme from "./src/styles/theme/DarkTheme";

import { AllProviders } from "./src/contexts";
import { StatusBar } from "./src/components/StatusBar/StatusBar";
// import { server } from "./src/server";
import LoginPage from "./src/pages/LoginPage";
import { ThemeContext } from "./src/contexts/ThemeContext";
import axios from "axios";
import { getAllUsers, login } from "./src/services/Users";

// server();

export default function App(props: any) {
  const contexto = useContext(ThemeContext);

  useEffect(() => {
    // createUser({
    //   id: "1",
    //   name: "Luana Farias",
    //   email: "luana@deliver.com",
    //   role: "SuperAdmin",
    //   password: "bananinha",
    // });
    // login("johndoe3@test.com", "123456");
  }, []);

  return (
    <>
      <AllProviders>
        {/* <PaperProvider theme={theme}> */}
        {/* <StatusBar
            style={theme.dark ? ("light" as string) : ("dark" as string)}
          /> */}

        <Routes />
        {/* </PaperProvider> */}
      </AllProviders>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
