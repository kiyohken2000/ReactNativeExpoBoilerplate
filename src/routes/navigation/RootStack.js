import React, { useState, useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from "./tabs/Tabs";
import Modal from "../../scenes/modal/Modal";
import { HomeTitleContext } from "../../contexts/HomeTitleContext";

const Stack = createStackNavigator()

export default function RootStack() {
  const [title, setTitle] = useState('default title')

  return (
    <HomeTitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      <HomeTitleContext.Consumer>
        {(ctx) => (
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name='HomeRoot'
              component={TabNavigator}
            />
            <Stack.Group
              screenOptions={{
                presentation: 'modal',
                headerShown: true
              }}
            >
              <Stack.Screen
                name='Modal'
                component={Modal}
                options={{
                  title: ctx.title,
                }}
              />
            </Stack.Group>
          </Stack.Navigator>
      )}
      </HomeTitleContext.Consumer>
    </HomeTitleContext.Provider>
  )
}