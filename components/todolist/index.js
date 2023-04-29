import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { Todo } from "../todo";
import { AddForm } from "../addform.js";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import SelectDropdown from "react-native-select-dropdown";
import { Button, Text } from "@rneui/base";
import { useRef } from "react";

export function TodoList() {
  const [todoListFilter, setTodoListFilter] = useState([]);
  const [filterSelect, setFilterSelect] = useState("ALL");
  const scrollViewRef = useRef();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Home work",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Home work 2",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Home work 3",
      isCompleted: false,
    },
    {
      id: 4,
      name: "Home work 4",
      isCompleted: false,
    },
  ]);

  const filter = {
    ALL: (todoList) => todoList,
    COMPLETE: (todoList) => todoList.filter((todo) => todo.isCompleted),
    UNCOMPLETE: (todoList) => todoList.filter((todo) => !todo.isCompleted),
  };

  useEffect(() => {
    setTodoListFilter(filter[filterSelect](todoList));
  }, [JSON.stringify(todoList), filterSelect]);

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
      type: "success",
      text1: "Successfully",
      text2: "Job added successfully!",
      visibilityTime: 2000,
    });
  };

  const removeJob = (id) => {
    const newTodoList = todoList.filter((e) => e.id !== id);
    setTodoList(newTodoList);
    Toast.show({
      type: "info",
      text1: "removed",
      text2: "Job was removed!",
      visibilityTime: 2000,
    });
  };

  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove all complete job?",
      [
        {
          text: "Yes",
          onPress: () => {
            clearAllJob();
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  const clearAllJob = () => {
    const jobs = filter["UNCOMPLETE"](todoList);
    setTodoList(jobs);
    Toast.show({
      type: "info",
      text1: "removed",
      text2: "Jobs was removed!",
      visibilityTime: 2000,
    });
  };

  const countries = ["ALL", "COMPLETE", "UNCOMPLETE"];

  return (
    <View style={styles.container_inner}>
      <View style={styles.topFilter}>
        <Button
          color="error"
          onPress={showConfirmDialog}
          disabled={filter["COMPLETE"](todoList).length === 0}
        >
          Clear All
        </Button>
        <View style={styles.centerEnd}>
          <Text>Filter:</Text>
          <SelectDropdown
            buttonTextStyle={{
              borderColor: "red",
              borderWidth: 1,
              borderRadius: 10,
            }}
            defaultValue="ALL"
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setFilterSelect(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>
      <View style={styles.todo_list}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {todoListFilter.map((todo) => (
            <Todo
              key={todo.id}
              todoData={todo}
              checkTodo={checkTodo}
              removeJob={removeJob}
            ></Todo>
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
    flex: 8,
  },
  bottom_add: {
    flex: 1,
  },
  topFilter: {
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
