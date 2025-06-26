import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, View } from 'react-native';
import Home from '../screen/AppScreen/Home';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator
                screenOptions={({ navigation }) => ({
                    headerTransparent: true,
                    headerBackground: () => (
                        <BlurView intensity={20} tint="light" style={{ flex: 1 }} />
                    ),
                    drawerType: 'slide',
                    overlayColor: 'rgba(0,0,0,0.4)',
                    swipeEdgeWidth: 50,
                    gestureEnabled: true,
                    drawerStyle: { width: '50%' },
                    animationTypeForReplace: 'push',

                })}
            >
                <Drawer.Screen name="Home" options={{ title: 'Home', headerTitle: "Assalamu Alaikum 👋🏻" }} component={Home} />
            </Drawer.Navigator>
        </GestureHandlerRootView>
    );
}
