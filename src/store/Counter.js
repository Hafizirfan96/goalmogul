import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../src/store/CounterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ top: 100 }}>
      <View>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>increment</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
