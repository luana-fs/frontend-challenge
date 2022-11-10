import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider, useTheme } from "react-native-paper";

import { Routes } from "./src/routes";

import DefaultTheme from "./src/styles/theme/DefaultTheme";
import DarkTheme from "./src/styles/theme/DarkTheme";

import { createServer } from "miragejs";
import { AllProviders } from "./src/contexts";

if (window.server) {
  server.shutdown();
}
console.log(window);

window.server = createServer({
  routes() {
    this.get("/users", () => {
      return {
        data: [
          {
            id: "1",
            name: "Luana Farias",
            email: "luana@deliver.com",
            role: "SuperAdmin",
            password: "bananinha",
          },
          {
            " id": "2",
            name: "Lígia",
            email: "ligia@deliver.com",
            role: "Admin",
            password: "pipoca",
          },
        ],
      };
    });
  },
});

export const useAppTheme = () => useTheme();
export default function App() {
  const [theme, setTheme] = useState(DarkTheme);
  // const isThemeDark = theme.dark;

  return (
    <>
      <AllProviders>
        <PaperProvider theme={theme}>
          {theme.dark ? (
            <StatusBar style="light" />
          ) : (
            <StatusBar style="dark" />
          )}
          <Routes />
        </PaperProvider>
      </AllProviders>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
