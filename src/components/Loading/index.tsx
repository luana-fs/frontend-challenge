import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export const Loading = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        height: "100%",
      }}
    >
      <ActivityIndicator
        size="large"
        animating={true}
        color={"gray"}
        style={{
          justifyContent: "center",
          height: "100%",
        }}
      />
    </View>
  );
};
