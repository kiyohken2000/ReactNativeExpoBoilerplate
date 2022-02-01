import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { HomeTitleContext } from "../../contexts/HomeTitleContext";
import { useFocusEffect } from '@react-navigation/native'
import { useRoute } from "@react-navigation/native";

export default function Modal() {
  const { user } = useContext(UserContext)
  const { setTitle } = useContext(HomeTitleContext)
  const route = useRoute()
  const { from } = route.params

  useFocusEffect(() => {
    setTitle(user.id)
  });

  useEffect(() => {
    console.log(from)
  }, [])

  return (
    <View style={styles.container}>
      <Text>ID: {user.id}</Text>
      <Text>Name: {user.userName}</Text>
      <Text>from: {from}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})