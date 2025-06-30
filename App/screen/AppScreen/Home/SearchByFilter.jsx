import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

const basicFields = [
  { label: 'Age', icon: <MaterialCommunityIcons name="cake" size={18} color="gray" /> },
  { label: 'Marital Status', icon: <MaterialCommunityIcons name="ring" size={18} color="gray" /> },
];
const specialFields = [
  { label: 'Height', icon: <MaterialCommunityIcons name="human-male-height" size={20} color="gray" /> },
  { label: 'Caste', icon: <MaterialIcons name="groups" size={20} color="gray" /> },
  { label: 'Education', icon: <MaterialCommunityIcons name="school-outline" size={20} color="gray" /> },
  { label: 'Occupation', icon: <MaterialIcons name="work-outline" size={20} color="gray" /> },
  { label: 'Mother Tongue', icon: <MaterialIcons name="language" size={20} color="gray" /> },
  { label: 'Annual Income', icon: <MaterialIcons name="currency-rupee" size={20} color="gray" /> },
  { label: 'Sect', icon: <MaterialCommunityIcons name="account-group" size={20} color="gray" /> },
  { label: 'Country', icon: <MaterialIcons name="public" size={20} color="gray" /> }
];

export default function SearchByFilter() {
  const refRBSheet = useRef(null);
  const height = Dimensions.get('window').height;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text className="text-lg font-medium capitalize px-4 pt-4 pb-2 text-primary">
          I would like to Match With
        </Text>
        <View className="space-y-2 border border-gray-200 rounded-xl overflow-hidden mx-3">
          {basicFields.map((field, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center px-4 py-5 border-b border-gray-100 bg-white"
            >
              <View className="flex-row items-center gap-3">
                {field.icon}
                <Text className="text-base text-gray-700">{field.label}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="black" />
            </View>
          ))}
        </View>
        <Text className="text-sm capitalize px-4 pt-2 pb-2 text-gray-500">
          Provide Your Basic Preferences For Better Match
        </Text>
      </View>

      <View>
        <Text className="text-lg font-medium capitalize px-4 pt-4 pb-2 text-primary">
          And More Specifically
        </Text>
        <View className="space-y-2 border border-gray-200 rounded-xl overflow-hidden mx-3">
          {specialFields.map((field, index) => (
            <Pressable
              key={index}
              onPress={() => refRBSheet.current?.open()}
              className="flex-row justify-between items-center px-4 py-5 border-b border-gray-100 bg-white"
            >
              <View className="flex-row items-center gap-3">
                {field.icon}
                <Text className="text-base text-gray-700">{field.label}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="black" />
            </Pressable>
          ))}
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        draggable={true}
        dragOnContent={true}
        height={height-200}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: 'lightgray'
          }
        }}
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true
        }}
      >
        <Text className="text-lg font-bold text-center">Select a Preference</Text>
        <Text className="text-sm text-center text-gray-500 mt-2">(Future customization options here)</Text>
      </RBSheet>
    </ScrollView>
  );
}
