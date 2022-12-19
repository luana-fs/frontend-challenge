import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar } from "react-native-paper";
import { AuthContext } from "../../contexts/AuthContext";
import { getDeviceDimensions } from "../../hooks/getDeviceDimensions";
//Nesse arquivo vão todos elementos customizáveis do Drawer. Ex: botão de logout.

export const CustomDrawer = (props) => {
  const { height } = getDeviceDimensions();
  const {
    handlers: { handleLogout },
  } = useContext(AuthContext);
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        style={{ marginTop: height / 2 }}
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
