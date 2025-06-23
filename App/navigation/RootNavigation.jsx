// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Registration from "../screen/Registration";
import '../../global.css'
import Login from "../screen/Login";
import ForgotPassword from "../screen/ForgotPassword";
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
  
      <NavigationContainer >
        <Stack.Navigator  initialRouteName="Registration">
          <Stack.Screen
            name="Registration"
            component={Registration}
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
            // options={{ title: "Welcome Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
