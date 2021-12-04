import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import DrawerNavigator from './drawer'
import TabNavigator from './tabs'

export default () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
)
