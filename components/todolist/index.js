import { useState } from "react";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { Todo } from "../todo";
import { AddForm } from "../addform.js";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function TodoList() {
  const [name, setName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const checkTodo = (id) => {
    const newTodoList = [...todoList];
    const job = newTodoList.find((e) => e.id === id);
    if (job) {
      job.isCompleted = !job.isCompleted;
      setTodoList(newTodoList);
    }
  };

  const addNewJob = (job) => {
    setTodoList([...todoList, job]);
    Toast.show({
      type: 'success',
      text1: 'Successfully',
      text2: 'Job added successfully!'
    });
  };

  const removeJob = (id) => {
    const newTodoList = todoList.filter((e) => e.id !== id);
    setTodoList(newTodoList);
    Toast.show({
      type: 'info',
      text1: 'removed',
      text2: 'Job was removed!'
    });
  };

  return (
    <View style={styles.container_inner}>
      <View style={styles.todo_list}>
        <ScrollView>
          {todoList.map((todo) => (
            <Todo key={todo.id} todoData={todo} checkTodo={checkTodo} removeJob={removeJob}></Todo>
          ))}
        </ScrollView>
      </View>
      <AddForm style={styles.bottom_add} addNewJob={addNewJob}></AddForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container_inner: {
    flex: 1,
    margin: 10,
  },
  todo_list: {
    width: "100%",
    flex: 10,
  },
  bottom_add: {
    flex: 1,
  },
});
