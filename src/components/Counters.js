import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";

export function Counters() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button
          title="increment"
          onClick={() => dispatch(increment())}
        ></Button>
        <Text>{count}</Text>
        <Button title="decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </View>
    </View>
  );
}
