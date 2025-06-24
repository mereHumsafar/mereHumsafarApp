// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import '../../global.css'
import Login from "../screen/Login";
import ForgotPassword from "../screen/ForgotPassword";
import Signup from "../screen/Signup";
import RegistrationStep from "../screen/RegistrationStep";
import BottomTabs from "./BottomTabs";
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  
  return (

      <NavigationContainer >
        <Stack.Navigator  initialRouteName="Signup">
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationStep}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomTabs"
            
            component={BottomTabs}
            options={{ headerShown: false,
headerBackButtonMenuEnabled: false

             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
