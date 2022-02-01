import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import DrawerNavigator from './drawer'
import TabNavigator from './tabs'
import RootStack from './RootStack'

export default () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
