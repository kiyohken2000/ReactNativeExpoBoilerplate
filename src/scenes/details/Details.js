import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import { colors, fontSize } from 'theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import ScreenTemplate from '../../components/ScreenTemplate'

export default function Details() {
  const route = useRoute()
  const navigation = useNavigation()
  const { from } = route?.params

  return (
    <ScreenTemplate screen='Detail' statusBar='light-content'>
      <View style={styles.root}>
        <Text style={styles.title}>{`Details (from ${from})`}</Text>
        <View style={styles.textContainer}>
          <Text>ヘッダーあり</Text>
        </View>
        <Button
          title="Go Back"
          color="white"
          backgroundColor={colors.pink}
          onPress={navigation.goBack}
        />
        <View style={{marginVertical: 20}} />
        <Button
          title="Go to Modal"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('ModalStack', {
              screen: 'Modal',
              params: {from: 'Details'}
            })
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
    backgroundColor: colors.lightGrayPurple,
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
