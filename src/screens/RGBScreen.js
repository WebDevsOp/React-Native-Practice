import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorName from "../components/ColorName";

const RGBScreen = () => {
  const [red, SetRed] = useState(0);
  const [green, SetGreen] = useState(0);
  const [blue, SetBlue] = useState(0);
  return (
    <View>
      <ColorName Color="Red" state={SetRed} />
      <ColorName
        Color="Green"
        More="More Green"
        Less="Less Green"
        state={SetGreen}
      />
      <ColorName
        Color="Blue"
        More="More Blue"
        Less="Less Blue"
        state={SetBlue}
      />
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
