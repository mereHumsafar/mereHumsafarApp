import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import InputField from '../components/FormComponent/InputField'
import SubmitButton from '../components/FormComponent/SubmitButton'

export default function Login() {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Login Data:', data)
    // Handle login logic here
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      className="bg-white"
    >
      <View className="flex-1 px-6 justify-center">
        {/* Header */}
        <View className="items-center mb-10">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} // Replace with your logo
            className="w-24 h-24 mb-4"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-gray-800">Welcome Back</Text>
          <Text className="text-gray-500 mt-1">Sign in to continue</Text>
        </View>

        {/* Login Form */}
        <View className="mb-6">
          <InputField
            name="username"
            control={control}
            placeholder="Email or Username"
            icon="mail-outline"
            rules={{ required: 'Email or username is required' }}
            containerClass="mb-4"
          />

          <InputField
            name="password"
            control={control}
            placeholder="Password"
            icon="lock-closed-outline"
            secureTextEntry
            rules={{ 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            }}
            containerClass="mb-1"
          />

          <TouchableOpacity 
            onPress={() => navigation.navigate('ForgotPassword')}
            className="self-end mb-6"
          >
            <Text className="text-rose-500 text-sm">Forgot Password?</Text>
          </TouchableOpacity>

          <SubmitButton
            title="Login"
            onPress={handleSubmit(onSubmit)}
            variant="primary"
            fullWidth
          />
        </View>

        {/* Footer */}
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text className="text-rose-500 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}