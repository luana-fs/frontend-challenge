import { StyleSheet } from "react-native";

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.background,
      padding: 20,
    },
    main: {
      height: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
  });
