import { connect } from "react-redux";
import React from "react";
import { View, Text } from "react-native";

const AboutUs = (props) => {
  console.log("about us+++++++++>", props);
  return (
    <View style={{ top: 50 }}>
      <Text>helo man {props.myUser.name}</Text>
      {/* <Text>helo man {props.myStudent.name}</Text> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  //   console.log("state===>", state);
  return {
    myUser: state.user,
    myStudent: state.student,
  };
};
export default connect(mapStateToProps)(AboutUs);
