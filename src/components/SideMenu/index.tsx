import * as React from "react";
import { useTheme as ReactPaperTheme } from "react-native-paper";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import { Theme } from "../../styles/theme/types";

export const SideMenu = () => {
  const Drawer: any = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={DashboardPage} />
        <Drawer.Screen name="Notifications" component={LoginPage} />
      </Drawer.Navigator>
    </>
  );
};
