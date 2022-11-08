import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";

export const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
