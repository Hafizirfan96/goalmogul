import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Header from "../components/Header";
import PhoneInput from "react-native-phone-number-input";
import { CheckBox } from "react-native-elements";

export default function PhoneVerify({ navigation }) {
  const [checked, setChecked] = useState(false);

  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef();

  const handleClick = () => {
    setChecked(!checked);
    console.log("checked====>", checked);
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <View
        style={{ justifyContent: "center", alignItems: "center", top: 150 }}
      >
        <Text style={{ fontSize: 20 }}>You're in!</Text>
        <Text style={{ padding: 20 }}>
          Want to win cash & cool prizes for helping others?
        </Text>
        <Text style={{ alignSelf: "flex-start", left: 15 }}>
          Insert your phone number to participate in contests
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            top: 15,
            left: 15,
          }}
        >
          <Text style={{ color: "red" }}>*</Text>
          <Text>Phone Number</Text>
        </View>

        <PhoneInput
          // disableArrowIcon="false"
          containerStyle={{
            // backgrosundColor: "red",
            width: "85%",
            height: 30,
            // right: 1,
            // left: 5,
            top: 20,
          }}
          textContainerStyle={{
            backgroundColor: "white",
            // right: 5,
            // height: 20,
            left: 15,
            borderRadius: 3,
            borderWidth: 0.3,
            // backgroundColor: "gray",
          }}
          layout="second"
          textInputStyle={{
            height: 30,
            // left: 20,
            // backgroundColor: "green",
          }}
          placeholder="Enter Phone Number"
          countryPickerButtonStyle={{
            width: 55,
            right: 15,
            height: 35,
            // borderRadius: 3,
            // top: 5,
            // borderWidth: 0.3,
          }}
          ref={phoneInput}
          defaultValue={value}
          // defaultCode="IN"
          // layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
            setCountryCode(phoneInput.current?.getCountryCode() || "");
          }}
          countryPickerProps={{ withAlphaFilter: true }}
          disabled={disabled}
          // withDarkTheme
          // withShadow
          // autoFocus
        />
        <View
          style={{
            alignSelf: "flex-start",
            top: 20,
            flexDirection: "row",
            // backgroundColor: "red",
          }}
        >
          <CheckBox checked={checked} onPress={() => handleClick()} />
          <Text
            style={{
              // backgroundColor: "red",
              top: 20,
              // left: 0.5,
              fontSize: 14,
              lineHeight: 16.71,
              width: "85%",
              // fontFamily: "SFProDisplay-Regular",
              // bottom: 1,
              right: 15,
              color: "#828282",
            }}
          >
            (Recommended) Occasionally text me about opportunities to win cash
            and other cool prizes by helping others achieve their goals.
            Standard text and data rates may apply. Text 'Stop' anytime.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
            setCountryCode(phoneInput.current?.getCountryCode() || "");
            let getNumberAfterPossiblyEliminatingZero =
              phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
            console.log(getNumberAfterPossiblyEliminatingZero);
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("addphoto")}
          style={{ top: 10 }}
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "red",
    borderRadius: 5,
    marginTop: 230,
    height: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45C9F6",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});
