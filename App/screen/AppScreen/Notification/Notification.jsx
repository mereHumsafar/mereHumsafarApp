// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { BlurView } from 'expo-blur';
// const notifications = [
//   {
//     id: '1',
//     type: 'request',
//     user: 'Ayesha',
//     age: 25,
//     city: 'Mumbai',
//     image: 'https://randomuser.me/api/portraits/women/1.jpg',
//     message: 'Ayesha sent you a request',
//     time: '2h ago',
//   },
//   {
//     id: '2',
//     type: 'like',
//     user: 'Fatima',
//     image: 'https://randomuser.me/api/portraits/women/2.jpg',
//     message: 'Fatima liked your profile',
//     time: '5h ago',
//   },
//   {
//     id: '3',
//     type: 'view',
//     user: 'Zainab',
//     image: 'https://randomuser.me/api/portraits/women/3.jpg',
//     message: 'Zainab viewed your profile',
//     time: '1d ago',
//   },
//   {
//     id: '4',
//     type: 'match',
//     user: 'Sana',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//     message: 'You matched with Sana',
//     time: '3d ago',
//   },
//   {
//     id: '5',
//     type: 'message',
//     user: 'Hiba',
//     image: 'https://randomuser.me/api/portraits/women/5.jpg',
//     message: 'Hiba sent you a message',
//     time: '4h ago',
//   },
//   {
//     id: '6',
//     type: 'like',
//     user: 'Noor',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//     message: 'Noor liked your profile',
//     time: '2d ago',
//   },
//   {
//     id: '7',
//     type: 'view',
//     user: 'Amina',
//     image: 'https://randomuser.me/api/portraits/women/7.jpg',
//     message: 'Amina viewed your profile',
//     time: '5d ago',
//   },
//   {
//     id: '8',
//     type: 'request',
//     user: 'Laiba',
//     age: 28,
//     city: 'Hyderabad',
//     image: 'https://randomuser.me/api/portraits/women/8.jpg',
//     message: 'Laiba sent you a request',
//     time: '10h ago',
//   },
//   {
//     id: '9',
//     type: 'match',
//     user: 'Maryam',
//     image: 'https://randomuser.me/api/portraits/women/9.jpg',
//     message: 'You and Maryam are now matched',
//     time: '6h ago',
//   },
//   {
//     id: '10',
//     type: 'message',
//     user: 'Sumaiya',
//     image: 'https://randomuser.me/api/portraits/women/10.jpg',
//     message: 'Sumaiya replied to your message',
//     time: '15m ago',
//   },
// ];


// export default function Notification() {
//   const navigation = useNavigation();
//   const renderItem = ({ item }) => (
//     <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
//       <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full mr-3" />

//       <View className="flex-1">
//         <Text className="text text-gray-800">{item.message}</Text>
//         <Text className=" text-gray-400 mt-0.5">{item.time}</Text>
//       </View>

//       {item.type === 'request' && (
//         <TouchableOpacity className="bg-primary px-3 py-1 rounded-full">
//           <Text className="text-white  font-medium">View</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View className="flex-1 bg-white">
//       <SafeAreaView className="flex-1" edges={['top']}>
//         <Text className="text-xl font-bold px-4 pt-4 pb-2 text-gray-800">Invitation requests</Text>
//         <Pressable onPress={() => navigation.navigate('Requests') } className="flex-row relative justify-between  items-center px-4 py-3 border-b border-gray-200 mx-4 rounded-lg">
//           <Image source={{ uri: 'https://i.pinimg.com/736x/b6/a7/6f/b6a76f8f8a8bd321bb0d31be50b7c5ab.jpg' }} className="w-12 h-12 absolute top-1 left-1 rounded-full mr-3" />
//           <Image source={{ uri: 'https://i.pinimg.com/736x/75/9d/cd/759dcdc1e81b850c05021e5f6ca64900.jpg' }} className="w-12 h-12  rounded-full mr-3 border border-white" />
//           <View className="flex-1">
//             <Text className=" text-gray-800 font-bold">Haya,Alina with 99+ others</Text>
//             <Text className=" text-gray-800">Want to connect with you</Text>
//           </View>
//           <Ionicons name="chevron-forward-outline" size={20} color="lightgray" />
//         </Pressable>

//         <Text className="text-xl font-bold px-4 pt-4 pb-2 text-gray-800">Notifications</Text>
//         <FlatList

//           data={notifications}
//           keyExtractor={(item,index) => index.toString()}
//           renderItem={renderItem}
//         />
//       </SafeAreaView>
//     </View>
//   );
// }


import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notification() {
  const navigation = useNavigation();

  const sections = [
    {
      title: 'Interested Requests',
      icon: 'heart',
      screen: 'InterestedRequest',
      color: '#d90429',
    },

    {
      title: 'Accepted Requests',
      icon: 'check-circle',
      screen: 'AcceptedRequest',
      color: '#16a34a',
    },

    {
      title: 'Photo Requests',
      icon: 'image',
      screen: 'PhotoRequest',
      color: '#3b82f6',
    },

    {
      title: 'Other Notifications',
      icon: 'bell',
      screen: 'OtherNotifications',
      color: '#facc15',
    },

  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView className="flex-1 bg-white px-4 pt-5">
        <Text className="text-2xl font-bold mb-6  text-gray-800 text-left">Notifications</Text>
        {sections?.map((section, index) => (
          <Pressable
            key={index}
            onPress={() => navigation?.navigate(section?.screen)}
            className="flex-row items-center justify-between border-b border-gray-200 p-4 mb-4 rounded-xl shadow-sm"
          >
            <View className="flex-row items-center">
              <FontAwesome6 name={section?.icon} color={section?.color} size={20} className={`mr-3 `} />
              <Text className="text-base font-semibold text-gray-800">{section?.title}</Text>
            </View>
            <FontAwesome6 name="angle-right" size={20} color="#999" />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
