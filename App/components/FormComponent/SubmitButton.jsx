import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

export default function SubmitButton({
  title = "Submit",
  onPress,
  loading = false,
  disabled = false,
  variant = "primary", // "primary", "secondary", or "outline"
  fullWidth = true,
  icon,
  textStyle = {},
  buttonStyle = {}
}) {
  // Dynamic background colors based on variant
  const getBackgroundColor = () => {
    switch(variant) {
      case "secondary":
        return "bg-gray-500"
      case "outline":
        return "bg-transparent border"
      default:
        return "bg-rose-500"
    }
  }

  // Dynamic text colors based on variant
  const getTextColor = () => {
    switch(variant) {
      case "outline":
        return "text-rose-500"
      default:
        return "text-white"
    }
  }

  // Border color for outline variant
  const getBorderColor = () => {
    switch(variant) {
      case "outline":
        return "border-rose-500"
      default:
        return "border-transparent"
    }
  }

  return (
    <View className={`${fullWidth ? "w-full" : "self-center"}`}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        className={`
          ${getBackgroundColor()}
          ${getBorderColor()}
          py-3 px-6 rounded-lg
          flex-row items-center justify-center
          ${disabled ? "opacity-50" : "opacity-100"}
          ${fullWidth ? "w-full" : ""}
        `}
        style={buttonStyle}
      >
        {loading ? (
          <ActivityIndicator color={variant === "outline" ? "#FF6B6B" : "#FFF"} />
        ) : (
          <>
            {icon && <View className="mr-2">{icon}</View>}
            <Text 
              className={`${getTextColor()} font-semibold text-center text-lg`}
              style={textStyle}
            >
              {title}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  )
}