import React from "react";
import { Button, Text } from "react-native-paper";

export const DumbComponent = (props: any) => {
  return (
    <>
      <Button
        style={{ backgroundColor: "black" }}
        onPress={() => props.onPress("Raul")}
      >
        <Text>Criar usuario</Text>
      </Button>
      <Button
        style={{ backgroundColor: "pink" }}
        onPress={() => props.onPress2()}
      >
        <Text>Pegar usuario</Text>
      </Button>
    </>
  );
};
