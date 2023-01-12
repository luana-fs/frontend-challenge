import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { SideMenu } from "../components/SideMenu";
import { Theme } from "../styles/theme/types";
import { Provider, useTheme as ReactPaperTheme } from "react-native-paper";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { LoginContainer } from "../containers/LoginContainer";
import DashboardPage from "../pages/DashboardPage";
import { AuthContext } from "../contexts/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./RootNavigation";
import { SignInContainer } from "../containers/SignInContainer";
import { ThemeContext } from "../contexts/ThemeContext";

export const Routes = (props: any) => {
  const { isAuth, user } = useContext(AuthContext);

  const Stack = createNativeStackNavigator();

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Provider theme={theme}>
      <NavigationContainer
        ref={navigationRef}
        theme={theme.dark ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator
          initialRouteName={isAuth ? "DashboardPage" : "LoginPage"}
          screenOptions={{ headerShown: false }}
        >
          {isAuth ?? (
            <>
              <Stack.Screen name="LoginPage" component={LoginContainer} />
              <Stack.Screen name="SignInPage" component={SignInContainer} />
            </>
          )}

          <Stack.Screen name="SideMenu" component={SideMenu} />
          <Stack.Screen name="DashboardPage" component={DashboardPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
