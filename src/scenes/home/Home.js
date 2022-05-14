import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import Button from 'components/Button'
import { colors, fontSize } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import ScreenTemplate from '../../components/ScreenTemplate'

export default function Home() {
  const navigation = useNavigation()
  const { user } = useContext(UserContext)

  useEffect(() => {
    console.log('user:', user)
  }, [])
  
  return (
    <ScreenTemplate screen='Home' statusBar='dark-content'>
      <View style={styles.root}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.textContainer}>
          <Text>ヘッダーなしボトムタブあり</Text>
        </View>
        <Button
          title="Go to Details"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Details', { from: 'Home' })
          }}
        />
        <View style={{marginVertical: 10}} />
        <Button
          title="Go to Modal"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('ModalStack', {
              screen: 'Modal',
              params: {from: 'Home'}
            })
          }}
        />
        <View style={{marginVertical: 10}} />
        <Button
          title="Go to Post"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Post')
          }}
        />
        <View style={{marginVertical: 10}} />
        <Button
          title="Go to Menu"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Menu')
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
    fontSize: fontSize.xxxLarge,
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  }
})
