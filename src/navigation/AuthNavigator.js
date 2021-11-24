import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PhoneVerify from "../screens/PhoneVerify";
// import AddPhoto from "../screens/AddPhoto";
import SplashScreen from "../screens/SplashScreen";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="youAre"
        component={PhoneVerify}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="addphoto"
        component={AddPhoto}
        options={{ headerShown: false }}
      /> */}
    </>
  );
};
export default AuthNavigator;
