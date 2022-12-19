import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Avatar,
  Divider,
  Subheading,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import { AuthContext } from "../../contexts/AuthContext";
import { getDeviceDimensions } from "../../hooks/getDeviceDimensions";
import { View } from "react-native";
import { styles } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SwitchButton } from "../SwitchButton";
import DarkTheme from "../../styles/theme/DarkTheme";
//Nesse arquivo vão todos elementos customizáveis do Drawer. Ex: botão de logout.

export const CustomDrawer = (props) => {
  const { height } = getDeviceDimensions();
  const {
    states: { userInfo },
    handlers: { handleLogout },
  } = useContext(AuthContext);

  const { colors } = useTheme();
  const style = styles(colors);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <DrawerContentScrollView style={style.userInfoContainer}>
      <View style={style.profile}>
        <Title>Olá, {userInfo.name}</Title>
        <Text>Você é {userInfo.role}</Text>
      </View>
      <Divider style={{ marginBottom: 5 }} />
      <DrawerItemList {...props} />

      <SwitchButton
        text={"Modo noturno"}
        onPress={() => setTheme(theme.dark ? false : true)}
      />

      <DrawerItem
        label="Logout"
        style={{ marginTop: height / 4 }}
        icon={() => (
          <Avatar.Icon
            size={24}
            icon="logout-variant"
            style={{ backgroundColor: "transparent" }}
            size={32}
          />
        )}
        onPress={() => handleLogout()}
      />
    </DrawerContentScrollView>
  );
};
