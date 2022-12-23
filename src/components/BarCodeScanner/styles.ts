import { StyleSheet } from "react-native";

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    mainText: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
    },
  });
