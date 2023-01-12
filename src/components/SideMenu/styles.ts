import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const styles = (props: any) =>
  StyleSheet.create({
    profile: {
      padding: 20,
    },
    container: {
      marginTop: StatusBar.currentHeight,
      marginBottom: 0,
      flex: 1,
      width: "70%",
      backgroundColor: props.background,
      paddingTop: 10,
    },
    userInfoContainer: { marginTop: 20 },
  });
