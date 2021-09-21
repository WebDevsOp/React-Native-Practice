import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
          console.log(colors);
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: randomRGB() }} />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red} , ${green}  , ${blue} )`;
};
export default ColorScreen;

const styles = StyleSheet.create({});