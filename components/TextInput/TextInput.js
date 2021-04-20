import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const textInput = (props) => {
  const [task, setTask] = useState("");

  const onChangeTextHandler = (newTask) => {
    setTask(newTask);
  };

  const AddTaskHandler = () => {
    props.onAdd(task);
    setTask("");
  };

  return (
    <View>
      <TextInput
        onChangeText={onChangeTextHandler}
        style={styles.input}
        value={task}
        placeholderTextColor="red"
        placeholder="Add Task"
      />
      <Button onPress={AddTaskHandler} style={styles.addBtn} title="Add Task" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderColor: "#841584",
  },
  addBtn: {
    color: "#841584",
    margin: 8,
    padding: 14,
  },
});

export default textInput;
