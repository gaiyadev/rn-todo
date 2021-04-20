import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputText from "./components/TextInput/TextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <InputText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
