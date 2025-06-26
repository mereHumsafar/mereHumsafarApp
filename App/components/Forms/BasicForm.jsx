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
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, Pressable } from 'react-native';

export default function BasicForm({ onNext }) {
    const {
        control,
        formState: { errors },
    } = useForm();

    const [gender, setGender] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dob, setDob] = useState(null);


    return (
        <ScrollView
            className="flex-1 px-2 bg-white"
            contentContainerStyle={{ paddingBottom: 60 }}
            keyboardShouldPersistTaps="handled"
        >


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

            <Controller
                control={control}
                name="dateOfBirth"
                rules={{ required: 'Date of Birth is required' }}
                render={({ field: { onChange, value } }) => (
                    <>
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            className="border border-gray-300 rounded-lg p-4 mb-5 flex-row items-center gap-4"
                        >
                            <Ionicons name="calendar-outline" size={20} color="#d90429" />
                            <Text className={`${value ? 'text-gray-900' : 'text-gray-400'}`}>
                                {value ? value : 'Date of Birth (DD/MM/YYYY)'}
                            </Text>
                        </TouchableOpacity>

                        {errors.dateOfBirth && (
                            <Text className="text-xs text-red-500 -mt-4 mb-4">
                                {errors.dateOfBirth.message}
                            </Text>
                        )}

                        {showDatePicker && (
                            Platform.OS === 'android' ? (
                                <DateTimePicker
                                    value={dob ? new Date(dob) : new Date()}
                                    mode="date"
                                    display="default"
                                    maximumDate={new Date()}
                                    onChange={(event, selectedDate) => {
                                        setShowDatePicker(false);
                                        if (event.type === 'set' && selectedDate) {
                                            const formatted = selectedDate.toLocaleDateString('en-GB'); // DD/MM/YYYY
                                            setDob(selectedDate);
                                            onChange(formatted);
                                        }
                                    }}
                                />
                            ) : (
                                <Modal
                                    transparent={true}
                                    animationType="slide"
                                    visible={showDatePicker}
                                >
                                    <View className="flex-1 justify-end bg-black/30">
                                        <View className="bg-white rounded-t-2xl px-4 pt-4 pb-8">
                                            <DateTimePicker
                                                value={dob ? new Date(dob) : new Date()}
                                                mode="date"
                                                display="spinner"
                                                textColor='black'
                                                maximumDate={new Date()}
                                                onChange={(event, selectedDate) => {
                                                    if (event.type === 'set' && selectedDate) {
                                                        const formatted = selectedDate.toLocaleDateString('en-GB');
                                                        setDob(selectedDate);
                                                        onChange(formatted);
                                                    }
                                                }}
                                            />
                                            <TouchableOpacity
                                                onPress={() => setShowDatePicker(false)}
                                                className="mt-4 bg-rose-500 py-3 rounded-lg"
                                            >
                                                <Text className="text-center text-white font-semibold">
                                                    Done
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                            )
                        )}
                    </>
                )}
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
