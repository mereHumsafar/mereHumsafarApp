import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Pressable, Platform, Dimensions } from 'react-native';
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





// function Banner() {
//   const { width } = Dimensions.get('window');
//   const images = [
//     'https://img.freepik.com/premium-photo/valentines-day-card-with-girt-box-heart-shapes-pink-background-banner-with-decoration-copy-space-text-beauty-design-top-view-concept-holiday-love-fashion_788189-14027.jpg?w=2000',
//     'https://img.freepik.com/free-vector/clean-love-banner-valentines-day-design_1017-29745.jpg?t=st=1750952874~exp=1750956474~hmac=62e893c587922176fd60c363a4c19713190fba8215ad8ff081ca06c1b8ae4457&w=2000',
//     'https://img.freepik.com/free-vector/minimal-valentines-day-banner-with-paper-balloon-hearts_1017-29884.jpg?t=st=1750953505~exp=1750957105~hmac=9de0a9feb345e26b1ac11a1e74acacbf3e398f82d42ffd415624487858413d31&w=2000',
//     'https://img.freepik.com/premium-vector/red-white-paper-heart-shapes-pastel-pink-background-copy-space-love-valentine-concept_1302-40871.jpg',
//   ];

//   return (
//     <View className="w-full items-center my-5">
//       <FlatList
//       snapToAlignment='center'
//       snapToOffsets={[0, width, width * 2]}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         data={images}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Image
//             source={{ uri: item }}
//             style={{ width: width - 50,  height: 180 }}
//             className="rounded-lg mx-3"
//             resizeMode="cover"
//           />
//         )}
//       />
//     </View>
//   );
// }




function Banner() {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { width } = Dimensions.get('window');
const images = [
  'https://img.freepik.com/premium-photo/valentines-day-card-with-girt-box-heart-shapes-pink-background-banner-with-decoration-copy-space-text-beauty-design-top-view-concept-holiday-love-fashion_788189-14027.jpg?w=2000',
  'https://img.freepik.com/free-vector/clean-love-banner-valentines-day-design_1017-29745.jpg?t=st=1750952874~exp=1750956474~hmac=62e893c587922176fd60c363a4c19713190fba8215ad8ff081ca06c1b8ae4457&w=2000',
  'https://img.freepik.com/free-vector/minimal-valentines-day-banner-with-paper-balloon-hearts_1017-29884.jpg?t=st=1750953505~exp=1750957105~hmac=9de0a9feb345e26b1ac11a1e74acacbf3e398f82d42ffd415624487858413d31&w=2000',
  'https://img.freepik.com/premium-vector/red-white-paper-heart-shapes-pastel-pink-background-copy-space-love-valentine-concept_1302-40871.jpg',
];

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View className="w-full mb-4 relative">
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            width={width }
            className="w-{} h-44 "
            resizeMode="cover"
          />
        )}
      />
      <View className="absolute bottom-2 left-0 right-0 flex-row justify-center space-x-2">
        {images.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
}