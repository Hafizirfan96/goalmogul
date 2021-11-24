import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <View>
        <Text style={Styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: "90%",
    height: 45,
    backgroundColor: "#45C9F6",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    // textTransform: "uppercase",
    // fontWeight: "bold",
  },
});
