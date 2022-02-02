import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Print() {
  const route = useRoute()
  const { from } = route.params

  return (
    <View style={styles.container}>
      <Text>Print screen</Text>
      <Text>From: {from} screen</Text>
      <View style={styles.textContainer}>
        <Text>ボトムタブなしヘッダーありモーダル</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  }
})