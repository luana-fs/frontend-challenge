import * as React from "react";
import { Avatar, useTheme as ReactPaperTheme } from "react-native-paper";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import { Theme } from "../../styles/theme/types";
import { CustomDrawer } from "./CustomDrawer";

export const SideMenu = () => {
  const Drawer: any = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
        drawerContent={(props: any) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{
            drawerIcon: () => (
              <Avatar.Icon
                size={24}
                icon="view-dashboard"
                style={{ backgroundColor: "transparent" }}
                size={32}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Solicitações"
          component={LoginPage}
          options={{
            drawerIcon: () => (
              <Avatar.Icon
                size={24}
                icon="account-plus"
                style={{ backgroundColor: "transparent" }}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cadastrar produto"
          component={LoginPage}
          options={{
            drawerIcon: () => (
              <Avatar.Icon
                size={24}
                icon="barcode-scan"
                style={{ backgroundColor: "transparent" }}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Gerenciar contas"
          component={LoginPage}
          options={{
            drawerIcon: () => (
              <Avatar.Icon
                size={24}
                icon="account-group"
                style={{ backgroundColor: "transparent" }}
                size={32}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Produtos"
          component={LoginPage}
          options={{
            drawerIcon: () => (
              <Avatar.Icon
                size={24}
                icon="format-list-bulleted-square"
                style={{ backgroundColor: "transparent" }}
                size={32}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};
