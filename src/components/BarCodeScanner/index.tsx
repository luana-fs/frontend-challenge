import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Input } from "../Input";

export const BarCodeScannerComponent = ({ setBarCodeScan }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { colors } = useTheme();
  const style = styles(colors);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código ${data} scaneado com sucesso`);
    setBarCodeScan(data);
    // console.log("Barcode:", type, "Data:", data);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Permita acesso à câmera</Text>;
  }

  return (
    <View style={style.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};
