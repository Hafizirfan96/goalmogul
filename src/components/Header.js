import React from "react";
import { Image, View, StyleSheet, SafeAreaView } from "react-native";

export default function Header() {
  return (
    // <SafeAreaView>
    <View style={styles.headerView}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={{ width: 150, height: 150, top: 17, tintColor: "white" }}
      />
    </View>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerView: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45C9F6",
  },
});
