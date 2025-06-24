// App/components/InputField.js
import React from "react";
import { View, TextInput, Text } from "react-native";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

export default function InputField({
  name,
  control,
  placeholder,
  secureTextEntry,
  icon,
  rules = {},
  containerClass = "",
}) {
  return (
    <View className={`w-full mb-4 ${containerClass}`}>
      <View className="flex-row h-14 items-center border-b border-gray-300  px-3 bg-white">
        {icon && (
          <Ionicons 
            name={icon} 
            size={20} 
            color="#d90429" 
            style={{ marginRight: 10 }} 
          />
        )}
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <>
              <TextInput
                className="flex-1 text-base h-full py-3"
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry}
                style={{ paddingVertical: 0 }} 
              />
              {error && (
                <Text className="text-red-500 text-xs mt-1">
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
          name={name}
        />
      </View>
    </View>
  );
}