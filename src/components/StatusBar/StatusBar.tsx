import React from "react";
import { StatusBar as NativeStatusBar, StatusBarStyle } from "expo-status-bar";

export const StatusBar = (theme: StatusBarStyle) => {
  return <NativeStatusBar style={theme} />;
};
