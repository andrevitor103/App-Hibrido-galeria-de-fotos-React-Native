import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{
        uri: "http://192.168.0.102/dashboard/projects_mobile_hibrido/app-galeria/",
      }}
    >
      <StatusBar hidden />
    </WebView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
