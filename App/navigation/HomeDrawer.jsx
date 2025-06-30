import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/AppScreen/Home/Home';
import { BlurView } from 'expo-blur';
import { Text } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import SearchByFilter from '../screen/AppScreen/Home/SearchByFilter';
import { Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailedPage from '../screen/AppScreen/Home/DetailedPage';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeDrawer() {
    const Drawer = createDrawerNavigator();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator
                screenOptions={({ navigation }) => ({
                    headerTransparent: true,
                    headerBackground: () => (
                        <BlurView intensity={100} tint="light" style={{ flex: 1 }} />
                    ),
                    headerRight: () => (
                        <>
                            <Pressable onPress={() => navigation.navigate('SearchByFilter')}>
                                <Fontisto name="equalizer" size={20} color="gray" className="mr-5" />
                            </Pressable>
                        </>
                    ),
                    drawerType: 'slide',
                    overlayColor: 'rgba(0,0,0,0.4)',
                    swipeEdgeWidth: 50,
                    gestureEnabled: true,
                    drawerStyle: { width: '50%' },
                    animationTypeForReplace: 'push',

                })}
            >
                <Drawer.Screen name="Home" options={{ title: 'Home', headerTitle: "Assalamu Alaikum 👋🏻", headerTitleAlign: 'center' }} component={Home} />
            </Drawer.Navigator>
        </GestureHandlerRootView>
    );
}

export default function HomeNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Drawer"
                component={HomeDrawer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SearchByFilter"
                component={SearchByFilter}
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                    title: 'Select Your Preferences',
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailedPage}
                options={{
                    
                    headerBackTitle: 'Back',
                    title: 'Details',
                }}
            />
        </Stack.Navigator>
    );
}