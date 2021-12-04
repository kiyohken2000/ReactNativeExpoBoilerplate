import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'

import Profile from '../../../scenes/profile'
import Details from '../../../scenes/details'

const Stack = createStackNavigator()

export const ProfileStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  )
}