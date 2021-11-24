import React, { useState, useEffect } from "react";
import {
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView,
} from "react-native";
import { Formik, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";
import Header from "../components/Header";
import GenderSelect from "./GenderSelect";
import MaskInput, { Masks } from "react-native-mask-input";
import SubmitButton from "../components/SubmitButton";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../store/api/auth";
import { assertOptionalCallExpression } from "@babel/types";
import { get } from "../services/storage";
const privacyOptionss = [
  {
    id: 1,
    text: "Public",
    title: "Male",
    iconName: "account",
    value: "Male",
  },
  {
    id: 2,
    text: "Only Me",
    title: "Female",
    iconName: "heart",
    value: "Female",
  },
  {
    id: 3,
    text: "helo",
    title: "Other",
    iconName: "earth",
    value: "Other",
  },
  {
    id: 4,
    title: "Prefer not to say",
    iconName: "lock",
    value: "Prefer not to say",
  },
];

const RegisterScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  // const [value, setValue] = React.useState("");
  const [text, onChangeText] = React.useState();
  const [selected, setSelected] = useState("");

  const [error, setError] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const _changeColors = (value) => {
    setSelected(value);
  };

  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    dateOfBirth: "",
    selected: "",

    // value: "",
    // password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email("inveld email formate").required(),
    dateOfBirth: Yup.string().required(),
    // selected: Yup.string().required(),
    // options: Yup.string().required(),
  });
  const onSubmit = (values) => {
    console.log("selected value===>", selected);
    values.selected = selected;
    console.log("values===>", values);
    navigation.navigate("youAre");
    dispatch(
      signup({
        body: {
          name: values.name,
          email: values.email,
          dateOfBirth: values.dateOfBirth,
          selected: values.selected,
          // inviterCode: "k6-GkN7BSz",
        },
        onSuccess: (res) => {
          console.log("SIGNUP RESPONSE======>", res.data);
          if (res.data.error) {
            setIsVisible(false);
            setError(res.data.error);
          } else {
            setError("");
            setIsVisible(false);
            navigation.navigate("youAre", {
              // email: values.email,
            });
          }
        },
      })
    );
  };
  return (
    // <SafeAreaView style={{}}>
    <ScrollView>
      <>
        {/* <View style={{}}> */}
        <Header />
        {/* </View> */}

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{ top: 30, height: 600 }}>
                <View style={{ flexDirection: "row", left: 10, padding: 10 }}>
                  <Text style={{ color: "red", fontSize: 15 }}>*</Text>

                  <Text style={{ left: 3, fontSize: 15 }}>Full Name</Text>
                </View>

                <View style={styles.inputView}>
                  <TextInput
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    style={styles.textInput}
                    width="100%"
                    placeholder="Your Full Name"
                    //   placeholderTextColor="white"
                  />
                </View>

                <View style={{ padding: 2, marginLeft: 40 }}>
                  <Text style={{ color: "red" }}>
                    <ErrorMessage name="name" />{" "}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", left: 10, padding: 10 }}>
                  <Text style={{ color: "red", fontSize: 15 }}>*</Text>
                  <Text style={{ left: 3, fontSize: 15 }}>
                    Email or Phone number
                  </Text>
                </View>

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

                <Text style={{ left: 20 }}>
                  we'll send a link to set your password here
                </Text>

                <View style={{ padding: 2, marginLeft: 40 }}>
                  <Text style={{ color: "red" }}>
                    <ErrorMessage name="email" />{" "}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    left: 20,
                    // top: 10,
                    // padding: 10,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 15 }}>*</Text>

                  <Text style={{ left: 3, fontSize: 15 }}>Gender</Text>
                </View>

                <View
                  style={{
                    left: 20,
                    top: 12,
                    flexDirection: "row",
                  }}
                >
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {privacyOptionss.map((options, index) => {
                      return (
                        <>
                          <TouchableOpacity
                            style={{
                              height: 40,
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "row",
                              borderColor:
                                selected === options.value
                                  ? "#828282"
                                  : "lightgray",
                              borderWidth: 1,
                              borderRadius: 20,
                              paddingHorizontal: 10,
                              marginHorizontal: 5,
                            }}
                            key={options.title + index}
                            onPress={() => {
                              _changeColors(options.value);
                              // console.log(options.value);
                              // prop.selected(selected);
                            }}
                            // disabled={selected === options.value}
                          >
                            <Text
                              style={{
                                // fontFamily: "bold",
                                fontSize: 14,
                                color: "#828282",
                                opacity: selected === options.value ? 1 : 0.3,
                              }}
                            >
                              {options.title}
                            </Text>
                          </TouchableOpacity>
                        </>
                      );
                    })}
                  </ScrollView>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    left: 10,
                    top: 20,
                    padding: 10,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 15 }}>*</Text>
                  <Text style={{ left: 3, fontSize: 15 }}>Date of birth</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    borderColor: "gray",
                    borderWidth: 1,
                    width: "90%",
                    height: 40,
                    top: 20,
                    left: 20,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../assets/calender.jpg")}
                    style={{
                      borderWidth: 1,
                      borderColor: "gray",
                      width: 30,
                      height: 40,
                    }}
                  />

                  <MaskInput
                    onChangeText={handleChange("dateOfBirth")}
                    onBlur={handleBlur("dateOfBirth")}
                    value={values.dateOfBirth}
                    mask={Masks.DATE_MMDDYYYY}
                    placeholder="MM/DD/YYYY"
                    keyboardType="number-pad"
                  />
                  {/* {console.log("value========>", value)} */}
                </View>

                {/* <View style={{ padding: 2, marginLeft: 40, top: 20 }}>
                  <Text style={{ color: "red" }}>
                    <ErrorMessage name="dateOfBirth" />{" "}
                  </Text>
                </View> */}

                <View style={{ left: 20, top: 20 }}>
                  <Text>We won't share this information with anyone</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    left: 10,
                    top: 20,
                    padding: 10,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 15 }}>*</Text>
                  <Text style={{ left: 3, fontSize: 15 }}>Invite Code</Text>
                </View>

                <TextInput
                  placeholder="Enter you referral code here"
                  onChangeText={onChangeText}
                  value={text}
                  style={{
                    top: 20,
                    padding: 10,
                    justifyContent: "flex-start",
                    // marginTop: 50,
                    width: "90%",
                    height: 40,
                    borderWidth: 1,
                    left: 20,
                    borderColor: "gray",
                  }}
                />
                <View
                  style={{
                    paddingTop: 70,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text> By signing up agree to the </Text>
                  <TouchableOpacity>
                    <Text style={{ color: "#45C9F6" }}> Terms of Service</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    top: 90,
                  }}
                >
                  <SubmitButton title="Continue" />
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                  style={{
                    borderRadius: 5,
                    width: "90%",
                    alignItems: "center",
                    left: 20,
                    top: 90,
                    // marginTop: 15,
                    height: 45,
                    // backgroundColor: "black",
                  }}
                >
                  <Text
                    style={{
                      paddingTop: 8,
                      fontSize: 20,
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          )}
        </Formik>
      </>
    </ScrollView>
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  createAccount: {
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    left: 20,
    top: 110,
    height: 45,
    // padding: 10,
    backgroundColor: "#56b7f0",
  },
  inputView: {
    flexDirection: "row",
    width: "90%",
    marginLeft: 20,
    height: 40,
    borderWidth: 0.3,
  },
  textInput: {
    padding: 10,
  },
});
export default RegisterScreen;
