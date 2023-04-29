import { Button, Text, View } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <View style={{ margin: 10 }}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Counter"
          onPress={() => navigation.navigate("Counter")}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Counter Redux"
          onPress={() => navigation.navigate("CounterRedux")}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Todo List"
          onPress={() => navigation.navigate("TodoList")}
        />
      </View>
    </View>
  );
}
