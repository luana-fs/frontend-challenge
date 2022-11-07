import * as React from "react";
import { List } from "react-native-paper";
import { SelectProps } from "./types";

export const Select = ({ title, data }: SelectProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const [itemExpanded, setItemExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion title={title} expanded={expanded} onPress={handlePress}>
        {data.map((item: any) => (
          <List.Item
            title={item.name}
            onPress={item.onPress}
            right={(props) => <List.Icon {...props} icon="check" />}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};
