import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import InputField from '../components/FormComponent/InputField'
import { useForm } from 'react-hook-form'
import SubmitButton from '../components/FormComponent/SubmitButton'

export default function ForgotPassword() {
  const { control, handleSubmit } = useForm()
  const navigation = useNavigation()

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      

   
      <View className="items-center mb-8">
        <Ionicons
          name="finger-print-outline"
          size={60}
          className="text-blue-500"
        />
      </View>

      <Text className="text-center text-2xl font-bold text-black mb-8 leading-8">
        Forgot Your Password{'\n'}and Continue
      </Text>


      <View className="flex-row items-center  rounded-2xl mb-2">
        <InputField
          name="email"
          control={control}
          placeholder="Enter your email"
          secureTextEntry={false}
          icon="mail"
        />
      </View>

<View className="flex-row items-center  rounded-2xl my-4">

      <SubmitButton title="Continue" onPress={handleSubmit} />
</View>
      <Pressable
        onPress={() => navigation.goBack()}
        className="flex-row justify-center items-center"
      >
        <Ionicons name="arrow-back" size={16} className="mr-2 text-black" />
        <Text className="text-black text-sm">back to login</Text>
      </Pressable>
    </View>
  )
}
