// App/screens/Login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import InputField from '../components/FormComponent/InputField';
import SubmitButton from '../components/FormComponent/SubmitButton';

export default function Login() {
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login data 👉', data, { remember });
    // TODO: call API
  };

  return (
    <>
      <View className="h-2/5 overflow-hidden">
        <Image
          source={{
            uri: 'https://images.unsplash.com/flagged/photo-1566755395267-86735b23d097?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black/50 items-center justify-center">
          <Text className="text-white uppercase text-lg font-extrabold">Welcome back.</Text>
          <Text className="text-white text-base mt-1">Lets get started</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        className="flex-1 -mt-8 bg-white rounded-t-3xl px-6 pt-10 pb-6"
      >
        <InputField
          name="email"
          control={control}
          placeholder="jane@example.com"
          icon="mail-outline"
          keyboardType="email-address"
          rules={{ required: 'Email is required' }}
          containerClass="mb-4"
        />

        <InputField
          name="password"
          control={control}
          placeholder="Password"
          icon="lock-closed-outline"
          secureTextEntry
          rules={{ required: 'Password is required' }}
          containerClass="mb-2"
          withEye // ➜ add prop in InputField to toggle visibility
        />

        {/* Remember + Forgot */}
        <View className="flex-row items-center justify-between mb-6">
          <Pressable
            onPress={() => setRemember((v) => !v)}
            className="flex-row items-center"
          >
            <MaterialCommunityIcons
              name={remember ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={20}
              color={remember ? '#21C122' : '#666'}
            />
            <Text className="ml-2 text-gray-600">Remember me next time</Text>
          </Pressable>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text className="text-primary font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <SubmitButton
          title="Log in"
          onPress={handleSubmit(onSubmit)}
          variant="primary"
          fullWidth
          className="bg-[#21C122]"
        />

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-200" />
          <Text className="mx-4 text-gray-400">or</Text>
          <View className="flex-1 h-px bg-gray-200" />
        </View>

        {/* Social buttons */}
        <View className="flex-row justify-between gap-3">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-gray-300 rounded-full py-3">
            <Ionicons name="logo-google" size={20} className="mr-2 text-gray-700" />
            <Text className="text-gray-700 font-medium">Google Play</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-gray-300 rounded-full py-3">
            <Ionicons name="logo-apple" size={20} className="mr-2 text-gray-700" />
            <Text className="text-gray-700 font-medium">Apple Store</Text>
          </TouchableOpacity>
        </View>

        {/* Sign-up link */}
        <View className="flex-row justify-center mt-10">
          <Text className="text-gray-600">Don&apos;t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-primary font-semibold">Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
