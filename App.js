import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./stores";
import Toast from "react-native-toast-message";

import KeyboardAvoidingComponent, {
  DetailsScreen,
} from "./components/detail-screen";
import { HomeScreen } from "./components/home";
import { Counter } from "./components/counter";
import { CounterRedux } from "./components/counterredux";
import { TodoList } from "./components/todolist";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Details"
              component={KeyboardAvoidingComponent}
            />
            <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="CounterRedux" component={CounterRedux} />
            <Stack.Screen name="TodoList" component={TodoList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <Toast/>
    </>
  );
}

export default App;
