import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Button,
  ViewComponent,
} from "react-native";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../components/Header";
import SubmitButton from "../components/SubmitButton";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/api/auth";
import route from "../navigation/route";

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email or Phone number is required"),
    // phone: Yup.string()
    //   .required("This field is Required")
    //   .matches("Phone number is not valid"),
    password: Yup.string()
      .required("Password id required")
      .min(6, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  const onSubmit = async (values) => {
    console.log("login form value", values);
    dispatch(
      login({
        body: {
          email: values.email,
          password: values.password,
        },
        onSuccess: (res) => {
          console.log("login success===>", res.data);
          if (res.data.error) {
            setError(res.data.error);
          } else {
            setError("");
            navigation.navigate("home");
          }
        },
      })
    );
  };

  return (
    <View style={{}}>
      <Header />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values }) => (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ top: 130 }}>
              <View style={{ flexDirection: "row", left: 18 }}>
                <Text style={{ color: "red", fontSize: 15 }}>*</Text>

                <Text style={{ left: 3 }}>Email or Phone number</Text>
              </View>
              <View style={{}}>
                <View style={styles.inputView}>
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    style={styles.textInput}
                    width="100%"
                    placeholder="Email or phone number"
                    //   placeholderTextColor="white"
                  />
                </View>

                <View style={{ padding: 2, marginLeft: 20 }}>
                  <Text style={{ color: "red" }}>
                    {" "}
                    <ErrorMessage name="email" />{" "}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", left: 18 }}>
                  <Text style={{ color: "red", fontSize: 15 }}>*</Text>

                  <Text style={{ left: 3 }}>password</Text>
                </View>

                <View style={styles.inputView}>
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    style={styles.textInput}
                    width="100%"
                    placeholder="Password "
                    //   placeholderTextColor="#2c8ec9"
                    secureTextEntry={true}
                  />
                </View>

                <View style={{ padding: 2, marginLeft: 20 }}>
                  <Text style={{ color: "red" }}>
                    {" "}
                    <ErrorMessage name="password" />{" "}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={{ justifyContent: "center" }}>
                    <View style={{ marginLeft: 200 }}>
                      <Text style={{ color: "#45C9F6" }}>Forgot Password?</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    display: "flex",
                    marginTop: 250,
                    alignItems: "center",
                  }}
                >
                  <SubmitButton title="Log In" />

                  <View style={styles.loginView}>
                    <Text> Don't have an account?</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("RegisterScreen")}
                    >
                      <Text style={{ color: "#45C9F6" }}> Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  createAccount: {
    borderRadius: 5,
    width: "90%",
    height: 45,
    backgroundColor: "#56b7f0",
  },
  inputView: {
    flexDirection: "row",
    width: "90%",
    marginLeft: 20,
    height: 50,
    borderColor: "#DCD9D9",
    borderRadius: 5,
    padding: 10,
    borderWidth: 0.3,
  },
  textInput: {
    // position: "absolute",
    paddingLeft: 20,
    // top: 8,
  },
  loginView: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    paddingTop: 8,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
export default LoginScreen;
