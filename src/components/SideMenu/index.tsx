import * as React from "react";
import { Divider, Drawer } from "react-native-paper";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export const SideMenu = () => {
  const [active, setActive] = React.useState("");
  const { colors } = useTheme();
  const style = styles(colors);

  return (
    <Drawer.Section style={style.container} title="Navegação">
      <Drawer.Item
        label="Dashboard"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label="Produtos"
        active={active === "second"}
        onPress={() => setActive("second")}
      />
      <Drawer.Item
        label="Solicitações"
        active={active === "third"}
        onPress={() => setActive("third")}
      />
      <Drawer.Item
        label="Usuários"
        active={active === "four"}
        onPress={() => setActive("four")}
      />
      <Divider />
    </Drawer.Section>
  );
};
