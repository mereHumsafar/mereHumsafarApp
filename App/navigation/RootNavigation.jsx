// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Registration from "../screen/Registration";
import '../../global.css'
import Login from "../screen/Login";
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
  
      <NavigationContainer >
        <Stack.Navigator  initialRouteName="Registration">
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ title: "Welcome Home", headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
