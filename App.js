import Home from "./App/Home";
import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-secondary">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
      <Home />
    </View>
  );
}