import { View, Text } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <Text className='text-2xl text-white'>Home</Text>
    </View>
  )
}