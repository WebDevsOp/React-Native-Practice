import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorName from "../components/ColorName";

const RGBScreen = () => {
  const [red, SetRed] = useState(0);
  const [green, SetGreen] = useState(0);
  const [blue, SetBlue] = useState(0);
  return (
    <View>
      <ColorName Color="Red" state={red} setState={SetRed} />
      <ColorName Color="Green" state={green} setState={SetGreen} />
      <ColorName Color="Blue" state={blue} setState={SetBlue} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red} , ${green}  , ${blue} )`,
        }}
      />
    </View>
  );
};

export default RGBScreen;

const styles = StyleSheet.create({});
