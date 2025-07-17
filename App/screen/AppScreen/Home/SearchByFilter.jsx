import { View, Text, ScrollView, Pressable, Dimensions, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
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
  const [selectedField, setSelectedField] = useState(null);


  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView  >
        <View>
          <Text className="text-lg font-medium capitalize px-4 pt-4 pb-2 text-primary">
            I would like to Match With
          </Text>
          <View className="space-y-2 border border-gray-200 rounded-xl overflow-hidden mx-3">
            {basicFields.map((field, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setSelectedField(field.label);
                  refRBSheet.current?.open();
                }}

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
          <Text className="text-sm capitalize px-4 pt-2 pb-2 text-gray-500">
            Provide Your Basic Preferences For Better Match
          </Text>
        </View>

        <View className="">
          <Text className="text-lg font-medium capitalize px-4 pt-4 pb-2 text-primary">
            And More Specifically
          </Text>
          <View className="space-y-2 border border-gray-200 rounded-xl overflow-hidden mx-3">
            {specialFields.map((field, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setSelectedField(field.label);
                  refRBSheet.current?.open();
                }}

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
          height={height - 200}
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
          <View className="px-4 pt-4">
            <Text className="text-lg font-bold text-center">
              {selectedField ? `Select ${selectedField}` : 'Select a Preference'}
            </Text>

            {selectedField === 'Age' && (
    <Text className="text-center mt-4 text-gray-500">Age selection options</Text>
  )}

            {selectedField === 'Height' && (
              <Text className="text-center mt-4 text-gray-500">Height selection options</Text>
            )}

            {selectedField === 'Country' && (
              <Text className="text-center mt-4 text-gray-500">Dropdown list of countries</Text>
            )}

            {selectedField === 'Religion' && (
              <Text className="text-center mt-4 text-gray-500">Dropdown list of religions</Text>
            )}
            
          </View>
        </RBSheet>
      </ScrollView>
    </SafeAreaView>

  );
}


