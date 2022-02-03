import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import ScreenTemplate from '../../components/ScreenTemplate'

export default function Profile() {
  const navigation = useNavigation()

  return (
    <ScreenTemplate screen='Profile' statusBar='light-content'>
      <View style={styles.root}>
        <Text style={styles.title}>Profile</Text>
        <Button
          title="Go to Details"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Details', { from: 'Profile' })
          }}
        />
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
