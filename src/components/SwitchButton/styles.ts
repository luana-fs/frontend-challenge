import { StyleSheet } from "react-native";

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      marginLeft: 20,
      color: props.text,
    },
  });
