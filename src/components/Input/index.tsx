import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";
import { InputProps } from "./types";

export const Input = ({ password, textLabel, placeholder }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (text: string) => setInputValue(text);

  return (
    <TextInput
      secureTextEntry={isPasswordVisible ? false : password}
      mode="outlined"
      label={password ? "Senha" : textLabel}
      placeholder={password ? "Digite sua senha..." : placeholder}
      onChangeText={(text) => handleOnChange(text)}
      style={styles.inputStyles}
      right={
        password ? (
          isPasswordVisible ? (
            <TextInput.Icon
              name="eye"
              onPress={() => setIsPasswordVisible(false)}
            />
          ) : (
            <TextInput.Icon
              name="eye-off"
              onPress={() => setIsPasswordVisible(true)}
            />
          )
        ) : null
      }
    />
  );
};
