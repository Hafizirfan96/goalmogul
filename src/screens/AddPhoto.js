import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  // BackgroundImage,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "../components/Header";
import { BackgroundImage } from "react-native-elements/dist/config";
import axios from "axios";
import storage from "../services/storage";
import { useDispatch } from "react-redux";
import { setObjectKey } from "../store/auth/Profile";

export default function AddPhoto() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const Camera = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };
    Camera();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const ImageTypes = [
    "ProfileImage",
    "FeedImage",
    "PageImage",
    "GoalImage",
    "ChatFile",
    "FeedbackImage",
  ];
  const getImageUrl = (type) => {
    let imageType;
    if (!type) {
      imageType = "ProfileImage";
    } else if (ImageTypes.some((oneType) => oneType === type)) {
      imageType = type;
    } else {
      throw new Error(`Image type: ${type} is not included`);
    }
    return `https://api.goalmogul.com/api/secure/s3/${imageType}/signature`;
    // return `http:/192.168.1.3:8081/api/secure/s3/${imageType}/signature`
  };

  // "https://api.goalmogul.com/api/secure/s3/profileimage/signature"
  // "https://api.goalmogul.com/api/secure/user/profile"
  const handleSubmit = (image, type) => {
    return new Promise(async (resolve, reject) => {
      const url = getImageUrl(type);

      const param = {
        url,
        method: "post",
        data: {
          fileType: "image/jpeg",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTBkMGYxNGZmMWY4ODAwMWE1MjJjZGIiLCJpYXQiOjE2Mzc3NTkyMzQsImV4cCI6MTYzODAxODQzNH0.BDjjitInk2vT2P_2GCKiWYUQxKpejCFZnc1rc4TStmc",
        },
      };
      axios(param)
        .then((res) => {
          const { objectKey, signedRequest } = res.data;
          if (dispatch) {
            dispatch(setObjectKey(objectKey));
          }
          resolve({ signedRequest, image, objectKey });
          console.log("signedrequest====>", objectKey);
        })

        .catch((error) => {
          console.log("error a rha ha====>", error);
          reject(error);
        });
    });
  };

  return (
    <View>
      <Header />
      <View
        style={{ alignItems: "center", justifyContent: "center", top: 100 }}
      >
        <TouchableOpacity onPress={pickImage}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 170,
                height: 170,
                backgroundColor: "#E6E6E6",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
            >
              <BackgroundImage
                source={require("../../src/assets/takePicture.png")}
                style={{
                  width: 45,
                  height: 40,
                }}
              >
                {image && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 30,
                      // backgroundColor: "red",
                    }}
                  >
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 170,
                        height: 170,
                        borderRadius: 100,
                      }}
                    />
                  </View>
                )}
              </BackgroundImage>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{ top: 60, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Now, add a photo
          </Text>
          <Text style={{ fontSize: 17, top: 10 }}>
            This way, friends will recognize you
          </Text>
        </View>
        {/* <View> */}
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            top: 250,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: 40,
            backgroundColor: "#45C9F6",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Add photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            top: 250,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: 40,
            // backgroundColor: "#45C9F6",
            // borderRadius: 5,
          }}
        >
          <Text style={{ color: "#828282", fontSize: 17, fontWeight: "bold" }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
