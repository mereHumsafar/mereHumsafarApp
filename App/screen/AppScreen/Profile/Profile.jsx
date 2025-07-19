import { View, Text, SafeAreaView, Image, ImageBackground, Pressable, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const myProfileRoutes = [
    { name: 'Edit Profile', icon: 'create-outline', path: 'EditProfile' },
    { name: 'Security', icon: 'shield-checkmark-outline', path: 'Security' },
    { name: 'Your Activities', icon: 'stats-chart-outline', path: 'Activity' },
  ];

  const generalRoutes = [
    { name: 'Help', icon: 'help-circle-outline', path: 'Help' },
    { name: 'Support', icon: 'chatbox-ellipses-outline', path: 'Support' },
    { name: 'FAQ', icon: 'information-circle-outline', path: 'FAQ' },
    { name: 'Rate Us', icon: 'star-outline', path: 'RateUs' },
    { name: 'Logout', icon: 'log-out-outline', path: '/logout' },
  ];

  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/prv8XV5n/Background-5.png' }}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1 items-center justify-center p-4">
            <View className="items-center gap-3">
              <Image
                source={{ uri: 'https://packs.cactransfer.com/s/Arabian_Men/14.webp' }}
                className="w-28 h-28 rounded-full border object-center border-gray-50"
              />
              <Text className="text-2xl text-black font-bold">Ziya Afridi</Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
           
              <View className="mt-6 space-y-4">
                <Text className="text-2xl text-primary">My Profile</Text>
                {myProfileRoutes.map((route, index) => (
                  <Pressable
                    key={index}
                    onPress={() => navigation.navigate(route?.path)}
                    className="flex-row items-center justify-between px-5 py-4 rounded-xl border-b border-primary/10 "
                  >
                    <View className="flex-row items-center gap-4">
                      <Ionicons name={route?.icon} size={22} color="black" />
                      <Text className="text-base font-medium text-gray-800">{route.name}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                  </Pressable>
                ))}
              </View>

            
              <View className="mt-8 space-y-4">
                <Text className="text-2xl text-primary">General</Text>
                {generalRoutes.map((route, index) => (
                  <Pressable
                    key={index}
                    onPress={() => navigation.navigate(route?.path)}
                    className="flex-row items-center justify-between px-5 py-4 rounded-xl border-b border-primary/10"
                  >
                    <View className="flex-row items-center gap-4">
                      <Ionicons name={route.icon} size={22} color={route.name === 'Logout' ? 'red' : 'black'} />
                      <Text className={`text-base font-medium ${route.name === 'Logout' ? 'text-red-600' : 'text-gray-800'}`}>
                        {route.name}
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
