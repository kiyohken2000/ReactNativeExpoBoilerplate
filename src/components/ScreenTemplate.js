import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

export default function ScreenTemplate(props) {
  const { screen, statusBar } = props
  const [barStyle, setBarStyle] = useState('')

  useFocusEffect(
    useCallback(() => {
      console.log('screen:', screen)
      setBarStyle(statusBar)
      console.log('barStyle:', barStyle)
    }, [screen, statusBar])
  );

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