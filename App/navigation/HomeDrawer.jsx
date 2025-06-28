import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/AppScreen/Home';
import { BlurView } from 'expo-blur';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator
                screenOptions={({ navigation }) => ({
                    headerTransparent: true,
                    headerBackground: () => (
                        <BlurView intensity={100} tint="light" style={{ flex: 1 }} />
                    ),
                    drawerType: 'slide',
                    overlayColor: 'rgba(0,0,0,0.4)',
                    swipeEdgeWidth: 50,
                    gestureEnabled: true,
                    drawerStyle: { width: '50%' },
                    animationTypeForReplace: 'push',

                })}
            >
                <Drawer.Screen name="Home" options={{ title: 'Home', headerTitle: "Assalamu Alaikum 👋🏻", headerTitleAlign:'center' }} component={Home} />
            </Drawer.Navigator>
        </GestureHandlerRootView>
    );
}
