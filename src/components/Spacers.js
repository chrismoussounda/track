import React from "react";
import { View, StyleSheet } from "react-native";

const Spacers = ({ children }) => {
  return <View style={style.spacer}>{children}</View>;
};

const style = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacers;
