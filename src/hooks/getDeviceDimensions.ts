import React from "react";
import { Dimensions } from "react-native";

export const getDeviceDimensions = () => {
  const { height, width } = Dimensions.get("window");
  return { height, width };
};
