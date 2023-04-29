import { CheckBox, Icon, ListItem } from "@rneui/base";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

export function Todo({ todoData, checkTodo, removeJob }) {
  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this job?",
      [
        {
          text: "Yes",
          onPress: () => {
            removeJob(todoData.id);
          },
        },
        {
          text: "No",
        },
      ]
    );
  };
  return (
    <ListItem style={styles.todoItem}>
      <Icon
        onPress={showConfirmDialog}
        name="trash-can-outline"
        type="material-community"
        color="grey"
      />
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => checkTodo(todoData.id)}
      >
        <ListItem.Content>
          <ListItem.Title>{todoData.name}</ListItem.Title>
        </ListItem.Content>
      </TouchableOpacity>
      <CheckBox
        checked={todoData.isCompleted}
        onPress={() => checkTodo(todoData.id)}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
      />
    </ListItem>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    marginBottom: 10,
  },
});
