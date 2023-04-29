import { Button, Input } from "@rneui/base";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export function AddForm({ addNewJob }) {
  const [name, setName] = useState("");
  const getRandomId = () => {
    return Date.now().toString();
  };
  const onUpdateInput = (text) => {
    setName(text);
  };

  const onAddTodo = () => {
    const text = name.trim();
    if (text) {
      const newJob = {
        id: getRandomId(),
        name: name,
        isCompleted: false,
      };
      addNewJob(newJob);
      setName("");
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
      enabled
    >
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Input
            value={name}
            placeholder="enter job..."
            onChangeText={onUpdateInput}
          />
        </View>
        <Button onPress={onAddTodo} title="Add" />
      </View>
    </KeyboardAvoidingView>
  );
}
