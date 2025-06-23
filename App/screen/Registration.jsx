import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { useForm } from "react-hook-form";
import InputField from "../components/FormComponent/InputField";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../components/FormComponent/SubmitButton";

export default function Registration() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      resizeMode="cover"
      className="flex-1"
    >

      <View className="absolute inset-0 bg-black/60" />
      
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center p-6">
          <View className="items-center mb-8">
            <Text className="text-3xl font-bold text-white mb-2">
              Create Account
            </Text>
            <Text className="text-gray-200">
              Join our community today
            </Text>
          </View>

          <View className=" border bg-white backdrop-blur-3xl rounded-2xl p-6 shadow-lg">
            <InputField
              name="fullName"
              control={control}
              placeholder="Full Name"
              icon="person-outline"
              rules={{ required: "Full name is required" }}
              containerClass="mb-4"
            />

            <InputField
              name="email"
              control={control}
              placeholder="Email Address"
              icon="mail-outline"
              keyboardType="email-address"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              containerClass="mb-4"
            />

            <InputField
              name="phone"
              control={control}
              placeholder="Phone Number"
              icon="call-outline"
              keyboardType="phone-pad"
              rules={{ required: "Phone number is required" }}
              containerClass="mb-4"
            />

            <InputField
              name="password"
              control={control}
              placeholder="Create Password"
              icon="lock-closed-outline"
              secureTextEntry
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              }}
              containerClass="mb-4"
            />

            <SubmitButton
              title="Register Now"
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              fullWidth
            />

            <View className="flex-row justify-center mt-6">
              <Text className="text-gray-600">Already have an account? </Text>
              <Text 
                className="text-rose-500 font-bold"
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </View>

            <Text className="text-gray-400 text-xs text-center mt-4">
              By registering, you agree to our Terms & Conditions
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}