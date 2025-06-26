import { BlurView } from 'expo-blur';
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const requests = [
  {
    id: '1',
    name: 'Ayesha Khan',
    age: 25,
    city: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Fatima Shaikh',
    age: 27,
    city: 'Hyderabad',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Zainab Patel',
    age: 24,
    city: 'Delhi',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '4',
    name: 'Hafsa Noor',
    age: 22,
    city: 'Bangalore',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    name: 'Maryam Iqbal',
    age: 29,
    city: 'Lucknow',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '6',
    name: 'Sana Malik',
    age: 26,
    city: 'Kolkata',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '7',
    name: 'Lubna Sheikh',
    age: 28,
    city: 'Chennai',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: '8',
    name: 'Noor Jahan',
    age: 23,
    city: 'Jaipur',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: '9',
    name: 'Amira Khan',
    age: 30,
    city: 'Pune',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: '10',
    name: 'Hiba Qureshi',
    age: 21,
    city: 'Ahmedabad',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];


export default function Requests() {
    const renderItem = ({ item }) => (
        <View className="flex-row items-center px-4 py-3 border-b border-gray-100 bg-white">
            <Image
                source={{ uri: item.image }}
                className="w-14 h-14 rounded-full mr-4"
            />
            <View className="flex-1">
                <Text className="text-base font-semibold text-gray-800">
                    {item.name}, {item.age}
                </Text>
                <Text className="text-sm text-gray-500">{item.city}</Text>
            </View>
            <View className="flex-row items-center gap-3">
                <TouchableOpacity className=" px-3 py-2 rounded-full">
                    <Text className="text-gray-500 text-xs uppercase font-bold">Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-black px-5 py-2 rounded-lg">
                    <Text className="text-white text-xs uppercase font-bold">Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
       

            <SafeAreaView className="flex-1 bg-white">
              
                <FlatList
                className=" pt-12"
                    data={requests}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </SafeAreaView>
        
    );
}
