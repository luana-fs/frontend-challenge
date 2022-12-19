import * as React from "react";
import { Avatar, useTheme as ReactPaperTheme, Text } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardPage from "../../pages/DashboardPage";
import { CustomDrawer } from "./CustomDrawer";
import Solicitations from "../../pages/Solicitations";
import RegisterProduct from "../../pages/RegisterProduct";
import Products from "../../pages/Products";
import { useNavigation } from "@react-navigation/native";
import { RegisterProductContainer } from "../../containers/RegisterProductContainer";
import { AuthContext } from "../../contexts/AuthContext";
import { ManageAccountsContainer } from "../../containers/ManageAccountsContainer";
import { ProductContainer } from "../../containers/ProductContainer";

export const SideMenu = () => {
  const Drawer: any = createDrawerNavigator();

  const {
    states: { isAuth, userInfo },
  } = React.useContext(AuthContext);

  // const { colors } = useTheme();
  // const style = styles(colors);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
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

      {userInfo.role === "SuperAdmin" ? (
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
      ) : null}

      {userInfo.role === "SuperAdmin" || "Admin" ? (
        <Drawer.Screen
          name="Cadastrar Produto"
          component={RegisterProductContainer}
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
      ) : null}

      {userInfo.role === "SuperAdmin" ? (
        <Drawer.Screen
          name="Gerenciar contas"
          component={ManageAccountsContainer}
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
      ) : null}

      <Drawer.Screen
        name="Produtos"
        component={ProductContainer}
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
  );
};
