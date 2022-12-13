import React, { useState } from "react";
import { List } from "react-native-paper";
import { SelectProps } from "./types";

export const Select = ({ title, data, role }: SelectProps) => {
  const [expanded, setExpanded] = useState(false);
  const [itemExpanded, setItemExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion title={title} expanded={expanded} onPress={handlePress}>
        {data.map((item: any) => (
          <List.Item
            key={item.name}
            title={item.name}
            onPress={() => {
              item.onPress();
              setExpanded(!expanded);
            }}
            right={
              //FIX IT - mudar role para selecterOption
              item.name === role
                ? (props) => <List.Icon {...props} icon="check" />
                : null
            }
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};
