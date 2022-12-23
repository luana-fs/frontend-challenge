import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";
import { InputProps } from "./types";

export const Input2 = ({
  password,
  placeholder,
  value,
  onChange,
  flat,
  ...rest
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <TextInput
      //aqui eu apliquei o principio de liskov
      {...rest}
      secureTextEntry={isPasswordVisible ? false : password}
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
