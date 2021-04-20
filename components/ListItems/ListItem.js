import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ data, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(data.id)}>
      <View key={data.id} style={styles.list}>
        <Text style={styles.textColor}> {data.value} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 8,
    backgroundColor: "#efefef",
    padding: 7,
    borderWidth: 9,
    borderColor: "#efefef",
  },
  textColor: {
    color: "red",
  },
});
export default ListItem;
