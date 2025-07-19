import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../FormComponent/InputField';
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function FamilyForm({ onNext }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [focusField, setFocusField] = useState(null);

  const onSubmit = (data) => {
    console.log('Family Form Data:', data);
    onNext?.();
  };

  return (
    <ScrollView
      className="flex-1 px-2 bg-white"
      contentContainerStyle={{ paddingBottom: 60 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* ─────────────────── Father's Name ─────────────────── */}
      <InputField
        name="fatherName"
        control={control}
        placeholder="Father's Full Name"
        icon="man-outline"
        rules={{ required: "Father's name is required" }}
        containerClass="mb-5"
      />

      {/* ─────────────────── Father's Occupation ───────────── */}
      <InputField
        name="fatherOccupation"
        control={control}
        placeholder="Father's Occupation"
        icon="briefcase-outline"
        containerClass="mb-5"
      />

      {/* ─────────────────── Mother's Name ─────────────────── */}
      <InputField
        name="motherName"
        control={control}
        placeholder="Mother's Full Name"
        icon="woman-outline"
        rules={{ required: "Mother's name is required" }}
        containerClass="mb-5"
      />

      {/* ─────────────────── Mother's Occupation ───────────── */}
      <InputField
        name="motherOccupation"
        control={control}
        placeholder="Mother's Occupation"
        icon="briefcase-outline"
        containerClass="mb-5"
      />

      {/* ─────────────────── Family Type ───────────────────── */}
      <Text className="text-gray-600 mb-1">Family Type</Text>
      <Controller
        control={control}
        name="familyType"
        rules={{ required: 'Family type is required' }}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            style={{
              height: 48,
              borderColor: focusField === 'familyType' ? '#F43F5E' : 'lightgray',
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
            data={[
              { label: 'Joint', value: 'joint' },
              { label: 'Nuclear', value: 'nuclear' },
              { label: 'Extended', value: 'extended' },
            ]}
            labelField="label"
            valueField="value"
            placeholder={
              focusField === 'familyType' ? '...' : 'Select Family Type'
            }
            value={value}
            onFocus={() => setFocusField('familyType')}
            onBlur={() => setFocusField(null)}
            onChange={(item) => {
              onChange(item.value);
              setFocusField(null);
            }}
            renderLeftIcon={() => (
              <Ionicons name="home-outline" className="mr-2" size={20} color="#d90429" />
            )}
          />
        )}
      />
      {errors.familyType && (
        <Text className="text-xs text-red-500 -mt-3 mb-3">
          {errors.familyType.message}
        </Text>
      )}

      <InputField
        name="noOfBrothers"
        control={control}
        placeholder="Number of Brothers"
        icon="people-outline"
        keyboardType="numeric"
        containerClass="mb-5"
      />
      <InputField
        name="noOfSisters"
        control={control}
        placeholder="Number of Sisters"
        icon="people-outline"
        keyboardType="numeric"
        containerClass="mb-5"
      />

      <InputField
        name="familyIncome"
        control={control}
        placeholder="Annual Family Income (₹)"
        icon="cash-outline"
        keyboardType="numeric"
        containerClass="mb-5"
      />

      <InputField
        name="selfIncome"
        control={control}
        placeholder="Annual Self Income (₹)"
        icon="card-outline"
        keyboardType="numeric"
        containerClass="mb-5"
      />

    </ScrollView>
  );
}
