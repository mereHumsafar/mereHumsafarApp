import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../FormComponent/InputField';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function AccountForm({ onNext }) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [focusField, setFocusField] = useState(null);

    const onSubmit = (data) => {
        console.log('Account Form Data:', data);
        onNext?.();
    };

    return (
        <ScrollView
            className="flex-1 px-2 bg-white"
            contentContainerStyle={{ paddingBottom: 60 }}
            keyboardShouldPersistTaps="handled"
        >
            <View className="flex-row  justify-between items-center  rounded-2xl mb-2">


                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1545287092-36b94da710ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                    className="w-40 h-40 self-center mb-5 rounded-full"
                    resizeMode="contain "
                />
                <Pressable className="flex-row items-center border-primary justify-center w-1/2 gap-2 border rounded-full p-2">
                    <EvilIcons name="camera" size={22} color="black" />
                    <Text className="text-primary font-bold">Edit</Text>
                </Pressable>
                
            </View>
            <InputField
                name="about"
                control={control}
                placeholder="Write about yourself..."
                icon="create-outline"
                multiline
                rules={{ required: 'About section is required' }}
                containerClass="mb-5"
            />

            {/* <Text className="text-gray-600 mb-1">Do you have any disability?</Text> */}
            <Controller
                control={control}
                name="disability"
                rules={{ required: 'This field is required' }}
                render={({ field: { onChange, value } }) => (
                    <Dropdown
                        style={{
                            height: 48,
                            borderColor: focusField === 'disability' ? '#F43F5E' : 'lightgray',
                            borderWidth: 1,
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            marginBottom: 20,
                            backgroundColor: 'white',
                        }}
                        containerStyle={{
                            borderRadius: 8,
                            elevation: 4,
                            paddingVertical: 4,
                        }}
                        itemTextStyle={{ fontSize: 14, color: '#1F2937' }}
                        selectedTextStyle={{
                            fontSize: 14,
                            color: '#111827',
                            fontWeight: '500',
                        }}
                        placeholderStyle={{ color: '#9CA3AF', fontSize: 14 }}
                        activeColor="#FEE2E2"
                        data={[
                            { label: 'No', value: 'no' },
                            { label: 'Yes - Physical', value: 'physical' },
                            { label: 'Yes - Visual', value: 'visual' },
                            { label: 'Yes - Hearing', value: 'hearing' },
                            { label: 'Other', value: 'other' },
                        ]}
                        labelField="label"
                        valueField="value"
                        placeholder={focusField === 'disability' ? '...' : 'Select Disability'}
                        value={value}
                        onFocus={() => setFocusField('disability')}
                        onBlur={() => setFocusField(null)}
                        onChange={(item) => {
                            onChange(item.value);
                            setFocusField(null);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons className="mr-2" name="wheelchair-accessibility" color="#d90429" size={20} />
                        )}
                    />
                )}
            />
            {errors.disability && (
                <Text className="text-xs text-red-500 -mt-3 mb-3">
                    {errors.disability.message}
                </Text>
            )}


            <InputField
                name="hobbies"
                control={control}
                placeholder="Hobbies (comma separated)"
                icon="sparkles-outline"
                containerClass="mb-5"
            />

            <InputField
                name="languagesSpoken"
                control={control}
                placeholder="Languages Spoken"
                icon="language-outline"
                containerClass="mb-5"
            />

            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                className="bg-[#F43F5E] py-3 rounded-lg"
            >
                <Text className="text-center text-white font-semibold text-base">
                    Continue
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
