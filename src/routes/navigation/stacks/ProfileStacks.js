import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { navigationProps } from './navigationProps/navigationProps'
import GradientHeader from '../../../components/GradientHeader'
import { showToast } from '../../../utils/showToast'
import { colors } from '../../../theme'

import Profile from '../../../scenes/profile/Profile'
import Details from '../../../scenes/details/Details'

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
          headerBackground: () => <GradientHeader />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                showToast({ title: 'Hello', body: 'Header button pressed' })
              }}
              style={{ paddingHorizontal: 15 }}
            >
              <FontIcon name="bell" size={20} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
          headerBackTitleVisible: false,
          headerBackground: () => <GradientHeader />,
        }}
      />
    </Stack.Navigator>
  )
}