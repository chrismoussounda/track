import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackList Screen</Text>
      <Button title="Go to LoginFlow" onPress={() => navigation.navigate("TrackDetail")} />
    </>
  );
};

const style = StyleSheet.create({});

export default TrackListScreen;
