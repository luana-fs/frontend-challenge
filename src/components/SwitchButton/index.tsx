import React, { useState } from "react";
import { Text, View } from "react-native";
import { Switch, useTheme } from "react-native-paper";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export const SwitchButton = ({ text, onPress }: any) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const { colors } = useTheme();
  const style = styles(colors);

  console.log("ASCORAI", colors);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    onPress && onPress();
  };

  return (
    <View style={style.container}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        style={{ width: 60 }}
      />
      <Text style={style.text}>{text}</Text>
    </View>
  );
};
