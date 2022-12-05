import { StyleSheet } from "react-native";

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundColor,
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
      height: 300,
      width: 300,
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "tomato",
    },
  });
