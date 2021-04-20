import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InputText from "./components/TextInput/TextInput";
import ListItems from "./components/ListItems/ListItem";

export default function App() {
  const [allTasks, setallTasks] = useState([]);
  const addTaskHadler = (newTask) => {
    setallTasks([
      ...allTasks,
      {
        id: Math.random().toString(),
        value: newTask,
      },
    ]);
  };

  const onDeleteHandler = (id) => {
    // setallTasks(() => {
    //   return allTasks.filter((goal) => goal.id !== id);
    // });
    const filterArr = [...allTasks];
    const filterItems = filterArr.filter((task) => task.id !== id);
    setallTasks(filterItems);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textColor}>Add A Task</Text>
      </View>
      <View>
        <InputText onAdd={addTaskHadler} />
      </View>
      <FlatList
        keyExtractor={(task) => task.id}
        data={allTasks}
        renderItem={(data) => (
          <ListItems data={data.item} onDelete={onDeleteHandler} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  textColor: {
    color: "#841584",
    fontSize: 20,
    padding: 15,
    textAlign: "center",
  },
});
