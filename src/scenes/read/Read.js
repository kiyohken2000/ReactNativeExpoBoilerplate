import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import ScreenTemplate from '../../components/ScreenTemplate'

export default function Read() {
  const route = useRoute()
  const navigation = useNavigation()

  return (
    <ScreenTemplate screen='Read' statusBar='dark-content'>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Read Screen</Text>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
