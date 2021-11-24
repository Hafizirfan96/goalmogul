import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../components/Header";

export default function MobilePhoneVerication() {
  const [otp, setOtp] = useState([]);
  const [otpVal, setOtpVal] = useState("");

  return (
    <>
      <Header />
      <View style={{ top: 200, left: 20 }}>
        <Text
          style={{ fontSize: 22, fontWeight: "700", alignSelf: "flex-start" }}
        >
          Mobile Phone Verication!
        </Text>
        <Text style={styles.textStyle}>
          Please enter the 6 digit code we sent to
          {""} . It may take up 10 seconds to arrive.
        </Text>

        <View style={{ top: 20 }}>
          <TextInput
            onChangeText={(value) => {
              if (isNaN(value)) {
                return;
              }
              if (value.length > 6) {
                return;
              }
              let val = value + "------".substr(0, 6 - value.length);
              let a = [...val];
              setOtpVal(a);
              setOtp(value);
              console.log("value===>", value);
            }}
            style={{ height: 0 }}
            autoFocus={true}
          />
          <View style={styles.otpBoxesContainer}>
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
              <Text style={styles.otpBox} key={index}>
                {otp[item]}
              </Text>
            ))}
          </View>
        </View>

        <View
          style={{
            top: 40,
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <Text
            style={{
              lineHeight: 25.71,
              fontSize: 17,
              color: "#333333",
              alignSelf: "flex-start",
              //   marginTop: 15,
            }}
          >
            {" "}
            Didn,t receive the code?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#45C9F6", fontSize: 17, lineHeight: 26 }}>
              {" "}
              Send again
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            top: 10,
            justifyContent: "center",
            alignItems: "center",
            right: 25,
          }}
        >
          <Text style={{ fontSize: 20, color: "#828282" }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    lineHeight: 25.71,
    width: "85%",
    fontSize: 15,
    color: "#333333",
    alignSelf: "flex-start",
    marginTop: 15,
  },
  otpBoxesContainer: {
    flexDirection: "row",
  },
  otpBox: {
    left: 20,
    fontSize: 20,
    padding: 10,
    marginRight: 12,
    borderRadius: 5,
    borderWidth: 0.3,
    height: 45,
    width: 45,
    textAlign: "center",
  },
  button: {
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
    fontSize: 20,
  },
});
