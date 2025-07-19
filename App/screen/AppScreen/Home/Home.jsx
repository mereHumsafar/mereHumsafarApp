import React, { use, useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Pressable, Platform, Dimensions } from 'react-native';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const dummyProfiles = [
  {
    id: '1',
    name: 'Ayesha, 25',
    dob: '1999-01-01',
    location: 'Mumbai',
    height: '5\'4"',
    weight: '55kg',
    education: 'B.Sc Computer Science',
    university: 'Mumbai University',
    email: 'ayesha@example.com',
    phone: '+91 9876543210',
    father: 'Mr. Imran Khan',
    mother: 'Mrs. Shaista Khan',
    siblings: '1 Brother, 1 Sister',
    about: 'I’m a simple, family-oriented girl who values honesty and tradition. I enjoy reading, traveling, and spending quality time with loved ones.',
    img: 'https://ds393qgzrxwzn.cloudfront.net/resize/c700x700/cat1/img/images/0/On8w8IneXU.jpg'
  },
  {
    id: '2',
    name: 'Fatima, 27',
    dob: '1997-06-15',
    location: 'Hyderabad',
    height: '5\'3"',
    weight: '60kg',
    education: 'MBA',
    university: 'Osmania University',
    email: 'fatima@example.com',
    phone: '+91 9123456789',
    father: 'Mr. Salim Ansari',
    mother: 'Mrs. Najma Ansari',
    siblings: '2 Brothers',
    about: 'Ambitious and caring, I’m looking for a partner who believes in mutual respect. I love cooking, interior decorating, and learning new skills.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMUsyqQli5cx0262qhY7tjzIQcPhghTE9Dg&s'
  },
  {
    id: '3',
    name: 'Zainab, 23',
    dob: '2001-02-10',
    location: 'Delhi',
    height: '5\'5"',
    weight: '58kg',
    education: 'B.A. Psychology',
    university: 'Delhi University',
    email: 'zainab@example.com',
    phone: '+91 9988776655',
    father: 'Mr. Tariq Sheikh',
    mother: 'Mrs. Farah Sheikh',
    siblings: '1 Sister',
    about: 'Creative and compassionate, I enjoy helping others and believe in lifelong learning. My hobbies include sketching and meditation.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8bH9AAhP6kmJCj8yXk7wsl6kA4hXbpdzCgcqm_rrSTtt9N167b0kf3VR59fEva0-D-Y&usqp=CAU'
  },
  {
    id: '4',
    name: 'Sara, 24',
    dob: '2000-08-20',
    location: 'Bangalore',
    height: '5\'6"',
    weight: '57kg',
    education: 'B.Com',
    university: 'Christ University',
    email: 'sara@example.com',
    phone: '+91 9090909090',
    father: 'Mr. Amir Hussain',
    mother: 'Mrs. Ruksar Hussain',
    siblings: '1 Brother',
    about: 'I’m a cheerful and positive person who loves nature, pets, and a good book. I am looking for a life partner who is kind-hearted and supportive.',
    img: 'https://i.pinimg.com/564x/91/27/d8/9127d8dd9bcf2eac3a06996e95e2b63f.jpg'
  }
];

export default function Home() {

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.OS === 'ios' ? 55 : 80,

        }}
        className={`flex-1 bg-white px-4 `}>
        <Banner />
        <Section title="Recommended For You" data={dummyProfiles} />

        <Section title="New Joinees" data={dummyProfiles} />

        <Section title="Premium Profiles" data={dummyProfiles} />

        <Section title="Same City Matches" data={dummyProfiles} />

      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, data }) {
  const navigation = useNavigation();

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
              <Pressable onPress={() => navigation.navigate('Details', { item })}>
                <Image
                  source={{ uri: item.img }}
                  className={`w-full h-28 rounded-lg object-contain mb-2 ${title === 'Premium Profiles' ? 'opacity-20' : ''}`}
                />
              </Pressable>
              <Text className="text-xs absolute bottom-3 px-2 py-[2px] rounded-md bg-black/50 left-2 text-white font-bold">{item.location}</Text>
            </View>
            <Text className="font-semibold text-sm text-gray-800 text-left">{item.name}</Text>
            <Pressable className='w-full bg-primary py-2 px-2 rounded-lg flex-row gap-1 justify-center items-center mt-2'>
              <EvilIcons name="sc-telegram" size={16} color="white" />
              <Text className="text-white text-xs uppercase font-bold" >Interested</Text>
            </Pressable>
          </View>
        </>}
      />
    </View>
  );
}

function Banner() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://i.ibb.co/mV4465w9/Chat-GPT-Image-Jun-28-2025-03-30-57-PM.png',

    'https://i.ibb.co/BH1Vc547/Chat-GPT-Image-Jun-28-2025-03-40-45-PM.png',

    'https://img.freepik.com/free-vector/minimal-valentines-day-banner-with-paper-balloon-hearts_1017-29884.jpg?t=st=1750953505~exp=1750957105~hmac=9de0a9feb345e26b1ac11a1e74acacbf3e398f82d42ffd415624487858413d31&w=2000',

    'https://img.freepik.com/premium-vector/red-white-paper-heart-shapes-pastel-pink-background-copy-space-love-valentine-concept_1302-40871.jpg',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="w-full mb-4 relative">
      <Image
        source={{ uri: images[currentIndex] }}
        style={{ height: 180 }}
        className="rounded-md w-full"
        resizeMode="cover"
      />
      <View className="absolute bottom-3 left-0 right-0 flex-row justify-center items-center space-x-1">
        {images.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
          />
        ))}
      </View>
    </View>
  );
}
