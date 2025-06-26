import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../screen/AppScreen/Notification/Notification';
import Requests from '../screen/AppScreen/Notification/Requests';
import { BlurView } from 'expo-blur';

export default function NotificationNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Requests"
                component={Requests}
                options={{
                    headerBackTitle: 'Back',

                    headerTransparent: true,
                    headerBackground: () => (
                        <BlurView intensity={20} tint="light" style={{ flex: 1 }} />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}