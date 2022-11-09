import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";
import { InputProps } from "./types";

export const Input = ({
  password,
  textLabel,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <TextInput
      value={value}
      secureTextEntry={isPasswordVisible ? false : password}
      mode="outlined"
      label={textLabel ? textLabel : "Senha"}
      placeholder={placeholder ? placeholder : textLabel}
      onChange={({ nativeEvent }) => onChange(nativeEvent)}
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
