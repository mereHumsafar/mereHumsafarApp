import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screen/AppScreen/Profile';
import Search from '../screen/AppScreen/Search';
import HomeDrawer from './HomeDrawer';
import NotificationNavigation from './NotificationNavigation';
export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen  name="HomeNavigation"
                options={{
                    tabBarActiveTintColor: 'black',
                    headerShown : false,
                    title : 'Home',
                    tabBarIcon: () => {
                        return (
                            <Ionicons name="home-outline" size={20} color="black" />
                        )
                    }
                }}

                component={HomeDrawer} />
            <Tab.Screen name="NotificationNavigation"
                options={{
                    tabBarActiveTintColor: 'black',
                    tabBarBadge: 3,
                    headerShown : false,
                    title : 'Notification',
                    tabBarBadgeStyle: {
                        backgroundColor: 'red',
                        color: 'white'
                    },
                    tabBarIcon: () => {
                        return (
                            <Ionicons name="notifications-outline" size={20} color="black" />
                        )
                    }

                }} component={NotificationNavigation} />

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

        </Tab.Navigator>
    )
}