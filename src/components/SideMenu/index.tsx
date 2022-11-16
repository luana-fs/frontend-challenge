import * as React from "react";
import { Avatar, useTheme as ReactPaperTheme } from "react-native-paper";
import {
  createDrawerNavigator,
  DrawerItem,
  useDrawerStatus,
} from "@react-navigation/drawer";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import { Theme } from "../../styles/theme/types";
import { CustomDrawer } from "./CustomDrawer";
import Solicitations from "../../pages/Solicitations";
import RegisterProduct from "../../pages/RegisterProduct";
import ManageAccounts from "../../pages/ManageAccounts";
import Products from "../../pages/Products";

export const SideMenu = () => {
  const Drawer: any = createDrawerNavigator();
  // console.log(useDrawerStatus());

  return (
    <Drawer.Navigator
      // defaultStatus={"open"}
      useLegacyImplementation
      screenOptions={{ headerShown: false }}
      initialRouteName="DashboardPage"
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
        component={Solicitations}
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
        component={RegisterProduct}
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
        component={ManageAccounts}
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
        component={Products}
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
      <Drawer.Screen
        name="Sair"
        component={LoginPage}
        options={{
          drawerIcon: () => (
            <Avatar.Icon
              size={24}
              icon="logout-variant"
              style={{ backgroundColor: "transparent" }}
              size={32}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
