import React, { useState } from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import { Routes } from "./src/routes";

import DefaultTheme from "./src/styles/theme/DefaultTheme";
import DarkTheme from "./src/styles/theme/DarkTheme";

import { AllProviders } from "./src/contexts";
import { StatusBar } from "./src/components/StatusBar/StatusBar";
import { server } from "./src/server";
import LoginPage from "./src/pages/LoginPage";

server();

export default function App(props: any) {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <>
      <AllProviders>
        <PaperProvider theme={theme}>
          <StatusBar
            style={theme.dark ? ("light" as string) : ("dark" as string)}
          />

          <Routes />
        </PaperProvider>
      </AllProviders>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
