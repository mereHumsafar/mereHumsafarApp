import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/AppScreen/Home';
import Notification from '../screen/AppScreen/Notification';
import Profile from '../screen/AppScreen/Profile';
import Search from '../screen/AppScreen/Search';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"

                options={{
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: () => {
                        return (
                            <Ionicons name="home-outline" size={20} color="black" />
                        )
                    }
                }}

                component={Home} />
            <Tab.Screen name="Notification"
                options={{
                    tabBarActiveTintColor: 'black',
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                        backgroundColor: 'red',
                        color: 'white'
                    },
                    tabBarIcon: () => {
                        return (
                            <Ionicons name="notifications-outline" size={20} color="black" />
                        )
                    }

                }} component={Notification} />
            <Tab.Screen name="Profile"
                options={{
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: () => {
                        return (
                            <Ionicons name="person-outline" size={20} color="black" />
                        )
                    }

                }}
                component={Profile}
            />
            <Tab.Screen name="Search"
                options={{
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: () => {
                        return (
                            <Ionicons name="search-outline" size={20} color="black" />
                        )
                    }
                }}
                component={Search}
            />
        </Tab.Navigator>
    )
}