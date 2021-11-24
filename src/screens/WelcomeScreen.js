import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image
          resizeMode="contain"
          source={require("../assets/logo.png")}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Achieve more, togather.</Text>
      </View>

      <View style={styles.clickView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
          style={styles.touchView}
        >
          <Text style={styles.touchText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginView}>
        <TouchableOpacity
          style={styles.loginTouch}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#45C9F6",
  },
  imageView: {
    top: 150,

    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 280,
    height: 210,
    tintColor: "white",
  },
  textView: {
    alignItems: "center",
    top: 370,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  clickView: { justifyContent: "center", alignItems: "center", top: 500 },
  touchView: {
    width: 340,
    height: 40,
    backgroundColor: "white",
    borderRadius: 4,
  },
  touchText: {
    textAlign: "center",
    top: 10,
    fontSize: 15,
    color: "#45C9F6",
  },
  loginView: {
    justifyContent: "center",
    alignItems: "center",
    top: 500,
  },
  loginTouch: {
    width: 340,
    height: 40,
    borderRadius: 4,
  },
  loginText: {
    textAlign: "center",
    top: 10,

    fontSize: 15,
    color: "white",
  },
});
