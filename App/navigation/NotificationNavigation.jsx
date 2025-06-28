import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';

// Screens
import Notification from '../screen/AppScreen/Notification/Notification';
import InterestedRequest from '../screen/AppScreen/Notification/InterestedRequest';
import AcceptedRequest from '../screen/AppScreen/Notification/AcceptedRequest';
import PhotoRequest from '../screen/AppScreen/Notification/PhotoRequest';
import OtherNotifications from '../screen/AppScreen/Notification/OtherNotifications';

export default function NotificationNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptionsWithBlur = {
    headerTransparent: true,
    headerBackTitle: 'Back',
    headerBackground: () => (
      <BlurView intensity={20} tint="light" style={{ flex: 1 }} />
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InterestedRequest"
        component={InterestedRequest}
        options={screenOptionsWithBlur}
      />

      <Stack.Screen
        name="AcceptedRequest"
        component={AcceptedRequest}
        options={screenOptionsWithBlur}
      />

      <Stack.Screen
        name="PhotoRequest"
        component={PhotoRequest}
        options={screenOptionsWithBlur}
      />

      <Stack.Screen
        name="OtherNotifications"
        component={OtherNotifications}
        options={screenOptionsWithBlur}
      />
    </Stack.Navigator>
  );
}
