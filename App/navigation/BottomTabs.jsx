import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screen/AppScreen/Profile';
import Search from '../screen/AppScreen/Search';
import HomeDrawer from './HomeDrawer';
import NotificationNavigation from './NotificationNavigation';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#b5b5b5',

            }}
        >
            <Tab.Screen
                name="HomeNavigation"
                component={HomeDrawer}
                options={{
                    headerShown: false,
                    title: 'For You',
                    tabBarActiveTintColor: '#d90429',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'heart' : 'heart-outline'}
                            size={20}
                            color={focused ? '#d90429' : '#b5b5b5'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="NotificationNavigation"
                component={NotificationNavigation}
                options={{
                    headerShown: false,
                    title: 'Notification',
                    tabBarBadgeStyle: {
                        backgroundColor: 'red',
                        color: 'white'
                    },
                    tabBarActiveTintColor: '#d90429',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'notifications' : 'notifications-outline'}
                            size={20}
                            color={focused ? '#d90429' : '#b5b5b5'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Search',
                    tabBarActiveTintColor: '#d90429',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            size={20}
                            color={focused ? '#d90429' : '#b5b5b5'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarActiveTintColor: '#d90429',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={20}
                            color={focused ? '#d90429' : '#b5b5b5'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
