import { StyleSheet } from "react-native";

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: props.background,
      padding: 20,
    },
  });
