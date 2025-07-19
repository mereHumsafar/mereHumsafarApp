import Home from "./App/Home";
import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>
      <Home />
    </View>
  );
}