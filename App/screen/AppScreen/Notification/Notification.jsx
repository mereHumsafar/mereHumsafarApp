import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
const notifications = [
  {
    id: '1',
    type: 'request',
    user: 'Ayesha',
    age: 25,
    city: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    message: 'Ayesha sent you a request',
    time: '2h ago',
  },
  {
    id: '2',
    type: 'like',
    user: 'Fatima',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    message: 'Fatima liked your profile',
    time: '5h ago',
  },
  {
    id: '3',
    type: 'view',
    user: 'Zainab',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    message: 'Zainab viewed your profile',
    time: '1d ago',
  },
];

export default function Notification() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
      <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full mr-3" />

      <View className="flex-1">
        <Text className="text-sm text-gray-800">{item.message}</Text>
        <Text className="text-xs text-gray-400 mt-0.5">{item.time}</Text>
      </View>

      {item.type === 'request' && (
        <TouchableOpacity className="bg-rose-500 px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-medium">View</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        <Text className="text-xl font-bold px-4 pt-4 pb-2 text-gray-800">Invitation requests</Text>
        <Pressable onPress={() => navigation.navigate('Requests') } className="flex-row relative justify-between  items-center px-4 py-3 border-b border-gray-200 mx-4 rounded-lg">
          <Image source={{ uri: 'https://i.pinimg.com/736x/b6/a7/6f/b6a76f8f8a8bd321bb0d31be50b7c5ab.jpg' }} className="w-12 h-12 absolute top-1 left-1 rounded-full mr-3" />
          <Image source={{ uri: 'https://i.pinimg.com/736x/75/9d/cd/759dcdc1e81b850c05021e5f6ca64900.jpg' }} className="w-12 h-12  rounded-full mr-3 border border-white" />
          <View className="flex-1">
            <Text className="text-sm text-gray-800 font-bold">Haya,Alina with 99+ others</Text>
            <Text className="text-sm text-gray-800">Want to connect with you</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="lightgray" />
        </Pressable>
        
        <Text className="text-xl font-bold px-4 pt-4 pb-2 text-gray-800">Notifications</Text>
        <FlatList
        
          data={notifications}
          keyExtractor={(item,index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </SafeAreaView>
    </View>
  );
}
