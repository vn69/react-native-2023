import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../stores/counterSlide";

export function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  
  const handleAdd = () => {
    dispatch(increment());
  };
  const handleAddBy10 = () => {
    dispatch(incrementByAmount(10));
  };
  
  const handleSubtract = () => {
    dispatch(decrement());
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Redux</Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>{counter.value}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={handleSubtract} title="decrement"></Button>
        <Button onPress={handleAdd} title="increment"></Button>
        <Button onPress={handleAddBy10} title="increment by 10"></Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({});
