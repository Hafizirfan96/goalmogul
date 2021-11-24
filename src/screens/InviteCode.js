import React from "react";
import { Text, View, TextInput, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../components/Header";
import SubmitButton from "../components/SubmitButton";

export default function InviteCode() {
  return (
    <View>
      <Header />
      <View style={{ left: 20, top: 200 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          We're in private beta testing
        </Text>
        <Text style={{ top: 5 }}>Enter invite code to gain instant access</Text>
        <View style={{ flexDirection: "row", top: 15 }}>
          <Text style={{ color: "red", fontSize: 15 }}>*</Text>
          <Text style={{ left: 3, fontSize: 15, top: 2 }}>Invite Code</Text>
        </View>

        <View
          style={{
            width: "90%",
            height: 40,
            top: 25,
            borderColor: "gray",

            borderWidth: 1, // borderRadius: 1,
          }}
        >
          <TextInput
            width="100%"
            placeholder="Enter Invite Code"
            style={{ padding: 10 }}
          />
        </View>
        <View style={{ flexDirection: "row", top: 35 }}>
          <Text style={{ color: "black" }}>*</Text>
          <Text style={{ fontSize: 13 }}>
            Hint: Your Code is the GoalMogul AccountID of the friend who invited
            you
          </Text>
        </View>

        <TouchableOpacity
          style={{
            top: 260,
            width: "90%",
            height: 40,
            backgroundColor: "#45C9F6",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            top: 280,
            // width: "90%",
            // height: 40,
            justifyContent: "center",
            alignItems: "center",
            // borderRadius: 5,
          }}
        >
          <Text>I don't have an Invite Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
