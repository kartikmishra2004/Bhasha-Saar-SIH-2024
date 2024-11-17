import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from "@react-native-picker/picker"

const FormField = ({ title, fieldType, handleChangeText, value }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  if (fieldType === 'text') {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{title}</Text>
        <TextInput
          secureTextEntry={title === 'Password' ? true : isPassword}
          value={value}
          onChangeText={handleChangeText}
          style={[
            styles.input,
            isFocused && styles.focusedInput, // Apply focus styling conditionally
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor="#aaa"
        />
      </View>
    );
  } else if (fieldType === 'deaf') {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{title}</Text>
        <Picker
          style={[
            styles.input,
            isFocused && styles.focusedInput, // Apply focus styling conditionally
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor="#aaa"
          dropdownIconColor="white"
          selectedValue={value}
          onValueChange={(itemValue) => handleChangeText(itemValue)} // Update parent state
        >
          <Picker.Item key={'no'} label='No' value='No' />
          <Picker.Item key={'yes'} label='Yes' value='Yes' />
        </Picker>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{title}</Text>
        <Picker
          style={[
            styles.input,
            isFocused && styles.focusedInput, // Apply focus styling conditionally
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor="#aaa"
          dropdownIconColor="white"
          selectedValue={value}
          onValueChange={(itemValue) => handleChangeText(itemValue)} // Update parent state
        >
          <Picker.Item key={'Hindi'} label='Hindi' value='Hindi' />
          <Picker.Item key={'Marathi'} label='Marathi' value='Marathi' />
          <Picker.Item key={'Gujrati'} label='Gujrati' value='Gujrati' />
        </Picker>
      </View>
    );
  }
};


export default FormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15, // Optional: Adds spacing between fields
  },
  label: {
    letterSpacing: 1,
    fontWeight: '400',
    color: 'white',
    marginBottom: 5, // Space between label and input
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#232533',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#232533',
    padding: 10,
    color: 'white',
  },
  focusedInput: {
    borderColor: '#ffa001',
  },
});
