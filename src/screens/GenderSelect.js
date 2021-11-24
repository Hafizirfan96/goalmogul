import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

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

const GenderSelect = (prop) => {
  const [selected, setSelected] = useState("");

  const _changeColors = (value) => {
    setSelected(value);
  };

  return (
    <View
      style={{
        top: 12,
        flexDirection: "row",
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                    selected === options.value ? "#828282" : "lightgray",
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  marginHorizontal: 5,
                }}
                key={options.title + index}
                onPress={() => {
                  _changeColors(options.value);
                  console.log(options.value);
                  // prop.selected(selected);
                }}
                disabled={selected === options.value}
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
  );
};

export default GenderSelect;
