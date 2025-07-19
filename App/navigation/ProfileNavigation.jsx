import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screen/AppScreen/Profile/Profile';
import EditProfile from '../screen/AppScreen/Profile/EditProfile';
import Security from '../screen/AppScreen/Profile/Security';
import Activity from '../screen/AppScreen/Profile/Activity';
import Help from '../screen/AppScreen/Profile/Help';
import Support from '../screen/AppScreen/Profile/Support';
import FAQ from '../screen/AppScreen/Profile/FAQ';
import RateUs from '../screen/AppScreen/Profile/RateUs';

export default function ProfileNavigation() {
    const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Security"
          component={Security}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RateUs"
          component={RateUs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </>
  )
}