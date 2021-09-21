import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.homeScreen}>
      {/* <Text style={styles.text}>Hi There ! </Text> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text style={styles.text}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Components");
        }}
      >
        <Text style={styles.text}>Go to ComponentScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
      >
        <Text style={styles.text}>Go to Image Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CounterScreen");
        }}
      >
        <Text style={styles.text}>Go to Counter Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ColorScreen");
        }}
      >
        <Text style={styles.text}>Go to Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RGBScreen");
        }}
      >
        <Text style={styles.text}>Go RGBScreen </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  homeScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
