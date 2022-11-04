import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import DarkTheme from "./src/styles/theme/dark";
import DefaultTheme from "./src/styles/theme/light";

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme);
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent("Front challenge", () => App);
