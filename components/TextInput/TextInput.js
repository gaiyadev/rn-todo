import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const textInput = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="red"
        autoFocus="true"
        placeholder="Add Task"
      />
      <Button style={styles.addBtn} title="Add Task" />
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
    margin: 5,
    padding: 14,
  },
});

export default textInput;
