import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";
import DarkTheme from "./src/styles/theme/DarkTheme";
import DefaultTheme from "./src/styles/theme/DefaultTheme";
import { Input } from "./src/components/LoginPage/Input";

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme);
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <Input textLabel="E-mail" placeholder="Digite seu email" />
        <Input password />
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
