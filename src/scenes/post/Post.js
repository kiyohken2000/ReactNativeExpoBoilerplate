import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from 'components/Button'
import { colors } from 'theme'

export default function Post() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Post screen</Text>
      <View style={styles.textContainer}>
        <Text>ボトムタブなし、ヘッダーなしのモーダル</Text>
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