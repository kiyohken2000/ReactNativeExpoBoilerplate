import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

export default function ScreenTemplate(props) {
  const { screen, statusBar } = props
  const [barStyle, setBarStyle] = useState('')
  const [trigger, setTorigger] = useState(0)

  useFocusEffect(
    useCallback(() => {
      console.log('screen:', screen)
      setTorigger(prev => prev + 1)
    }, [screen, statusBar])
  );

  useEffect(() => {
    setBarStyle(statusBar)
  }, [trigger])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} />
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})