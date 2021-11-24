import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

const MainStack = (props) => {
  // const dispatch = useDispatch();

  const { user } = props;
  console.log("user====in main screen", user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AuthNavigator(user)}
        {AppNavigator(user)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps)(MainStack);
// export default MainStack;
