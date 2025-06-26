import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';
const dummyProfiles = [
  { id: '1', name: 'Ayesha, 25', location: 'Mumbai', img: 'https://ds393qgzrxwzn.cloudfront.net/resize/c700x700/cat1/img/images/0/On8w8IneXU.jpg' },
  { id: '2', name: 'Fatima, 27', location: 'Hyderabad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMUsyqQli5cx0262qhY7tjzIQcPhghTE9Dg&s' },
  { id: '3', name: 'Zainab, 23', location: 'Delhi', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8bH9AAhP6kmJCj8yXk7wsl6kA4hXbpdzCgcqm_rrSTtt9N167b0kf3VR59fEva0-D-Y&usqp=CAU' },
  { id: '4', name: 'Sara, 24', location: 'Bangalore', img: 'https://i.pinimg.com/564x/91/27/d8/9127d8dd9bcf2eac3a06996e95e2b63f.jpg' },
];

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white ">

    <ScrollView className="flex-1 bg-white px-4 pt-14">
      <Section title="Recommended For You" data={dummyProfiles} />

      <Section title="New Joinees" data={dummyProfiles} />

      <Section title="Premium Profiles" data={dummyProfiles} />

      <Section title="Same City Matches" data={dummyProfiles} />

    </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, data }) {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-5">
        <View className="h-[1px] w-1/5  bg-gray-300" />
        <Octicons name="dot-fill" size={10} color="#d90429" />
        <Text className="text-sm uppercase  font-bold text-orange-500">{title}</Text>
        <Octicons name="dot-fill" size={10} color="#d90429" />
        <View className="h-[1px] w-1/5 bg-gray-300" />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <>
          <View className="w-32 mr-4 bg-white rounded-xl  shadow-sm">
            <View className="relative">
              {title === 'Premium Profiles' && <FontAwesome6 name="crown" size={18} color="#d90429" className="absolute top-1/3 left-1/3 z-50" />}
              <Image
                source={{ uri: item.img }}
                className={`w-full h-28 rounded-lg object-contain mb-2 ${title === 'Premium Profiles' ? 'opacity-20' : ''}`}
              />
              <Text className="text-xs absolute bottom-3 px-2 py-[2px] rounded-md bg-black/50 left-2 text-white font-bold">{item.location}</Text>
            </View>
            <Text className="font-semibold text-sm text-gray-800 text-left">{item.name}</Text>
            <Pressable className='w-full bg-primary py-1 px-2 rounded-lg flex-row gap-1 justify-between items-center mt-2'>
              <EvilIcons name="sc-telegram" size={16} color="white" />
              <Text className="text-white text-xs uppercase font-bold" >Interested</Text>
            </Pressable>
          </View>
        </>}
      />
    </View>
  );
}
