import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../FormComponent/InputField';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function BasicForm({ onNext }) {
    const {
        control,
        formState: { errors },
    } = useForm();

    const [gender, setGender] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <ScrollView
            className="flex-1 px-2 bg-white"
            contentContainerStyle={{ paddingBottom: 60 }}
            keyboardShouldPersistTaps="handled"
        >

            <InputField
                name="fullName"
                control={control}
                placeholder="Full Name"
                icon="person-outline"
                rules={{ required: 'Full Name is required' }}
                containerClass="mb-5"
            />


            <View className="flex-row justify-between items-center">

                <Text className="text-gray-600 mb-2">Gender</Text>{errors.gender && (
                    <Text className="text-xs text-red-500 -mt-3 mb-3">
                        {errors.gender.message}
                    </Text>
                )}
            </View>
            <Controller
                control={control}
                name="gender"
                rules={{ required: 'Gender is required' }}
                render={({ field: { onChange, value } }) => (
                    <View className="flex-row gap-4 mb-6">
                        {['male', 'female'].map((option) => (
                            <TouchableOpacity
                                key={option}
                                onPress={() => onChange(option)}
                                className={`flex-row items-center px-4 py-3 w-[48%] justify-center rounded-full border ${value === option ? 'bg-rose-500 border-rose-500' : 'border-gray-300'
                                    }`}
                            >
                                <View
                                    className={`w-3 h-3 rounded-full mr-2 ${value === option ? 'bg-white' : 'bg-gray-300'
                                        }`}
                                />
                                <Text className={`uppercase font-semibold ${value === option ? 'text-white' : 'text-gray-800'}`}>
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            />

            {/* ── DOB & Age ── */}
            <InputField
                name="dateOfBirth"
                control={control}
                placeholder="Date of Birth (DD/MM/YYYY)"
                icon="calendar-outline"
                rules={{ required: 'Date of Birth is required' }}
                containerClass="mb-5"
            />
            <InputField
                name="age"
                control={control}
                placeholder="Age"
                icon="hourglass-outline"
                rules={{ required: 'Age is required' }}
                containerClass="mb-5"
            />

            <Controller
                control={control}
                name="religion"
                rules={{ required: 'Religion is required' }}
                render={({ field: { onChange, value } }) => (
                    <Dropdown
                        style={{
                            height: 48,
                            borderColor: 'lightgray',
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
                        itemTextStyle={{
                            fontSize: 14,
                            color: '#1F2937', 
                        }}
                        selectedTextStyle={{
                            fontSize: 14,
                            color: '#111827', // gray-900
                            fontWeight: '500',
                        }}
                        placeholderStyle={{
                            color: '#9CA3AF',
                            fontSize: 14,
                        }}
                        activeColor="#FEE2E2" // light rose
                        data={[
                            { label: 'Islam', value: 'islam' },
                            { label: 'Hinduism', value: 'hinduism' },
                            { label: 'Christianity', value: 'christianity' },
                            { label: 'Sikhism', value: 'sikhism' },
                            { label: 'Buddhism', value: 'buddhism' },
                            { label: 'Other', value: 'other' },
                        ]}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        placeholder={!isFocus ? 'Select Religion' : '...'}
                        onChange={(item) => {
                            onChange(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <FontAwesome color="#d90429" className="mr-2" name="moon-o" size={20} />
                        )}
                    />
                )}
            />
            {errors.religion && (
                <Text className="text-xs text-red-500 -mt-3 mb-3">
                    {errors.religion.message}
                </Text>
            )}


            <InputField
                name="caste"
                control={control}
                placeholder="Caste"
                icon="list-outline"
                containerClass="mb-5"
            />
            <InputField
                name="subCaste"
                control={control}
                placeholder="Sub Caste"
                icon="list-outline"
                containerClass="mb-5"
            />

            {/* ── Mother Tongue ── */}
            <InputField
                name="motherTongue"
                control={control}
                placeholder="Mother Tongue"
                icon="chatbubble-ellipses-outline"
                containerClass="mb-5"
            />

            <Controller
                control={control}
                name="maritalStatus"
                rules={{ required: 'Marital status is required' }}
                render={({ field: { onChange, value } }) => (
                    <Dropdown
                        style={{
                            height: 48,
                            borderColor: 'lightgray',
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
                        itemTextStyle={{
                            fontSize: 14,
                            color: '#1F2937',
                        }}
                        selectedTextStyle={{
                            fontSize: 14,
                            color: '#111827',
                            fontWeight: '500',
                        }}
                        placeholderStyle={{
                            color: '#9CA3AF',
                            fontSize: 14,
                        }}
                        activeColor="#FEE2E2"
                        data={[
                            { label: 'Single', value: 'single' },
                            { label: 'Divorced', value: 'divorced' },
                            { label: 'Widowed', value: 'widowed' },
                            { label: 'Separated', value: 'separated' },
                        ]}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onFocus={() => setIsFocus('marital')}
                        onBlur={() => setIsFocus(false)}
                        placeholder={isFocus === 'marital' ? '...' : 'Select Marital Status'}
                        onChange={(item) => {
                            onChange(item.value);
                            setIsFocus(false);
                        }}
                         renderLeftIcon={() => (
                            <MaterialCommunityIcons color="#d90429" className="mr-2" name="heart-multiple-outline" size={20} />
                        )}
                    />
                )}
            />
            {errors.maritalStatus && (
                <Text className="text-xs text-red-500 -mt-3 mb-3">
                    {errors.maritalStatus.message}
                </Text>
            )}

            <InputField
                name="height"
                control={control}
                placeholder="Height (e.g. 5ft 6in)"
                icon="resize-outline"
                containerClass="mb-5"
            />
            <InputField
                name="weight"
                control={control}
                placeholder="Weight (kg)"
                icon="fitness-outline"
                containerClass="mb-5"
            />

            <InputField
                name="bloodGroup"
                control={control}
                placeholder="Blood Group (e.g. B+)"
                icon="water-outline"
                containerClass="mb-5"
            />

        </ScrollView>
    );
}
