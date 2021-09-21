import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorName = ({ Color, state }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Color}</Text>
      <Button
        title={`Increase ${Color}`}
        onPress={() => {
          state((prevState) => prevState + 10);
        }}
      />
      <Button
        title={`Decrease ${Color}`}
        onPress={() => {
          state((prevState) => prevState - 10);
        }}
      />
    </View>
  );
};

export default ColorName;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 50,
  },
});
