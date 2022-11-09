import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useInput } from "../../hooks/useInput";
import { styles } from "./styles";
import { InputProps } from "./types";

export const Input = ({ password, textLabel, placeholder }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (text: string) => setInputValue(text);

  const { value, onChange } = useInput("");
  console.log("valor input com hook", value);

  return (
    <TextInput
      secureTextEntry={isPasswordVisible ? false : password}
      mode="outlined"
      label={textLabel ? textLabel : "Senha"}
      placeholder={placeholder ? placeholder : textLabel}
      onChange={({ nativeEvent: { eventCount, target, text } }) =>
        // console.log(eventCount, target, text)
        onChange(text)
      }
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
