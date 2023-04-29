import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontSize: 20, marginBottom: 10}}>{count}</Text>
      <View style={{ flexDirection: "row"}}>
        <Button onPress={decrement} title="decrement"></Button>
        <Button onPress={increment} title="increment"></Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({});
