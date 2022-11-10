import React, { useState } from "react";
import { AppRegistry } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";

import { Routes } from "./src/routes";

import DefaultTheme from "./src/styles/theme/DefaultTheme";
import DarkTheme from "./src/styles/theme/DarkTheme";

import { AllProviders } from "./src/contexts";
import { StatusBar } from "./src/components/StatusBar/StatusBar";
import axios from "axios";
import { server } from "./src/server";
import LoginPage from "./src/pages/LoginPage";
import { DumbComponent } from "./DumbComponent";

server();

export default function App() {
  const [theme, setTheme] = useState(DarkTheme);

  const addName = async (name: string) => {
    try {
      const res = await axios.post("/users", {
        id: new Date(),
        name,
      });
      console.log("Axios criou", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("/users");
      console.log("Axios pegou", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AllProviders>
        <PaperProvider theme={theme}>
          <StatusBar
            style={theme.dark ? ("light" as string) : ("dark" as string)}
          />

          <DumbComponent onPress={addName} onPress2={getUsers} />
          {/* <Routes /> */}
        </PaperProvider>
      </AllProviders>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
