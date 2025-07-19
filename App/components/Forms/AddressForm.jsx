import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../FormComponent/InputField';
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function AddressForm({ onNext }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // track which dropdown is focused
  const [focusField, setFocusField] = useState(null);

  const onSubmit = (data) => {
    console.log('Address Form Data:', data);
    onNext?.();
  };

  return (
    <ScrollView
      className="flex-1 px-2 bg-white"
      contentContainerStyle={{ paddingBottom: 60 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* ───────────────── Country Dropdown ───────────────── */}
      <Text className="text-gray-600 mb-1">Country</Text>
      <Controller
        control={control}
        name="country"
        rules={{ required: 'Country is required' }}
        render={({ field: { onChange, value } }) => (
          <Dropdown
          
            style={{
              height: 48,
              borderColor: focusField === 'country' ? '#F43F5E' : 'lightgray',
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
              { label: 'India', value: 'india' },
              { label: 'United States', value: 'usa' },
              { label: 'Canada', value: 'canada' },
              { label: 'United Kingdom', value: 'uk' },
              { label: 'Australia', value: 'australia' },
            ]}
            labelField="label"
            valueField="value"
            placeholder={focusField === 'country' ? '...' : 'Select Country'}
            value={value}
            onFocus={() => setFocusField('country')}
            onBlur={() => setFocusField(null)}
            onChange={(item) => {
              onChange(item.value);
              setFocusField(null);
            }}
            renderLeftIcon={() => (
              <Ionicons name="flag-outline" size={20} color="#d90429" className="mr-2" />
            )}
          />
        )}
      />
      {errors.country && (
        <Text className="text-xs text-red-500 -mt-3 mb-3">
          {errors.country.message}
        </Text>
      )}

      {/* ───────────────── State / Province ───────────────── */}
      <InputField
        name="state"
        control={control}
        placeholder="State / Province"
        icon="map-outline"
        rules={{ required: 'State is required' }}
        containerClass="mb-5"
      />

      {/* ───────────────── City ───────────────────────────── */}
      <InputField
        name="city"
        control={control}
        placeholder="City"
        icon="business-outline"
        rules={{ required: 'City is required' }}
        containerClass="mb-5"
      />

      {/* ───────────────── Street Address ─────────────────── */}
      <InputField
        name="streetAddress"
        control={control}
        placeholder="House No. / Street"
        icon="home-outline"
        rules={{ required: 'Street Address is required' }}
        containerClass="mb-5"
      />

      {/* ───────────────── Area / Locality ────────────────── */}
      <InputField
        name="locality"
        control={control}
        placeholder="Area / Locality"
        icon="location-outline"
        containerClass="mb-5"
      />

      {/* ───────────────── Pin / Zip Code ─────────────────── */}
      <InputField
        name="zipcode"
        control={control}
        placeholder="Pin / Zip Code"
        icon="mail-open-outline"
        keyboardType="numeric"
        rules={{ required: 'Zip Code is required' }}
        containerClass="mb-5"
      />

      {/* ───────────────── Address Type Dropdown ──────────── */}
      <Text className="text-gray-600 mb-1">Address Type</Text>
      <Controller
        control={control}
        name="addressType"
        rules={{ required: 'Address type is required' }}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            style={{
              height: 48,
              borderColor:
                focusField === 'addressType' ? '#F43F5E' : 'lightgray',
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
              { label: 'Owned', value: 'owned' },
              { label: 'Rented', value: 'rented' },
              { label: 'Hostel', value: 'hostel' },
              { label: 'Other', value: 'other' },
            ]}
            labelField="label"
            valueField="value"
            placeholder={
              focusField === 'addressType' ? '...' : 'Select Address Type'
            }
            value={value}
            onFocus={() => setFocusField('addressType')}
            onBlur={() => setFocusField(null)}
            onChange={(item) => {
              onChange(item.value);
              setFocusField(null);
            }}
            renderLeftIcon={() => (
              <Ionicons
                name="home-outline"
                size={18}
                className="mr-2"
                color="#d90429"
                // style={{ marginRight: 4 }}
              />
            )}
          />
        )}
      />
      {errors.addressType && (
        <Text className="text-xs text-red-500 -mt-3 mb-3">
          {errors.addressType.message}
        </Text>
      )}

    </ScrollView>
  );
}
