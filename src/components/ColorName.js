import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorName = ({ Color, state, setState }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Color}</Text>
      <Button
        title={`Increase ${Color}`}
        onPress={() => {
          console.log(`${Color} : ${state}`);
          if (state <= 255) {
            setState((prevState) => prevState + 10);
          } else {
            alert("Cannot increase greater than 255");
          }
        }}
      />
      <Button
        title={`Decrease ${Color}`}
        onPress={() => {
          console.log(`${Color} : ${state}`);
          if (state >= 10) {
            setState((prevState) => prevState - 10);
          } else {
            alert("Cannot decrease less than 0");
          }
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
