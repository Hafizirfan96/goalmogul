import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AddPhoto from "../screens/AddPhoto";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="addphoto"
        component={AddPhoto}
        options={{ headerShown: false }}
      />
    </>
  );
};
export default AppNavigator;
