import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateUserId, updateStudentId } from "../redux/AllAction";
const Tests = () => {
  const [count, setCount] = useState(0);

  const hookData = useSelector((state) => {
    console.log("state=======>", state);
    return {
      myUser: state.user,
      myStudent: state.student,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hit Api");
    // props.newStudentId(count);
  }, [count]);

  const changeUserId = () => {
    dispatch(updateUserId(""));
    // props.newUserId("RT1010");
  };
  const changeStudentId = () => {
    dispatch(updateStudentId(""));
    // props.newStudentId("IC9090");
  };

  return (
    <View style={{ top: 50 }}>
      <Text>Teact + Redux</Text>
      <Text>User</Text>
      <Text>
        {hookData.myUser.name} - {hookData.myUser.userId}
      </Text>
      <Text>Student</Text>
      <Text>
        {hookData.name} - {hookData.myStudent.studentId}
      </Text>
      <Button title="click me" onPress={() => setCount(count + 1)} />
      <Button title="change user id " onPress={() => changeUserId()} />
      <Button title="change student id" onPress={() => changeStudentId()} />
      <Text>{count}</Text>
    </View>
  );
};

// const mapStateToProps = (state) => {
//   //   console.log("state===>", state);
//   return {
//     myUser: state.user,
//     myStudent: state.student,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // changeName: (name) => { dispatch({ type: "SET_NAME", payload: name });  },
//     // newUserId: (uId) => {dispatch({ type: "NEW_USER_ID", payload: uId });  },

//     changeName: (name) => {
//       dispatch(updateName(name));
//     },
//     newUserId: (uId) => {
//       dispatch(updateUserId(uId));
//     },
//     newStudentId: (sId) => {
//       dispatch(updateStudentId(sId));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Tests);
export default Tests;
