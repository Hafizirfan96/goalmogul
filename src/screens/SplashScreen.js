import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import storage from "../services/storage";
import { setToken } from "../store/auth/authState";
import { CommonActions } from "@react-navigation/native";
import route from "../navigation/route";
import { setUser } from "../store/auth/user";

const SplashScreen = (props) => {
  const user = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    let nextScreen = route.WELCOME;

    try {
      // const user = await storage.get("user");
      const xAuthToken = await storage.get("xAuthToken");

      // console.log("user token===>", user);
      console.log("user token===>", xAuthToken);
      // if (xAuthToken) {
      //   dispatch(setToken(xAuthToken));
      //   dispatch(setUser(user));
      //   nextScreen = route.Home;
      // }
    } catch (error) {
      console.log("error====>", error);
      //   navigation.push("SignUp");
    }
    setTimeout(() => {
      navigateToNextScreen(nextScreen);
    }, 3500);
  };

  const navigateToNextScreen = (name) => {
    const { navigation } = props;
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [{ name }],
    });

    navigation.dispatch(resetAction);
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ width: 60, height: 60, tintColor: "white" }}
        source={require("../assets/splash-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45C9F6",
    flex: 1,
  },
});
export default SplashScreen;
