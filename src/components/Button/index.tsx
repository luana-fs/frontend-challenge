import React from "react";
import { Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ buttonText, onPress }: ButtonProps) => {
  return (
    <PaperButton mode="contained" onPress={onPress} style={styles.buttonStyles}>
      <Text>{buttonText}</Text>
    </PaperButton>
  );
};
