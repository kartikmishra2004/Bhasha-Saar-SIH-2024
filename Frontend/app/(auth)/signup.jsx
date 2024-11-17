import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/images/img.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/customButton'
import FormField from '../../components/formField'
import { router, redirect } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    isDeaf: '',
    langPref: '',
  });

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100vh', paddingVertical: 50, backgroundColor: '#161622' }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#161622",
            gap: 60
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                marginBottom: 20,
              }}
              source={logo}
            />
            <Text
              style={{
                textAlign: "center",
                width: 300,
                fontSize: 30,
                fontFamily: 'Inder',
                color: 'white',
                fontWeight: '900'
              }}
            >Sign Up to <Text style={{ color: '#ffa001' }}>Ashakt bhashini</Text>
            </Text>
            <Text style={{
              fontSize: 16,
              letterSpacing: 1,
              fontWeight: '100',
              color: 'white',
              marginTop: 10
            }}>Join Us and Redefine Connection.</Text>
          </View>
          <View>
            <FormField 
              fieldType='text' 
              title='Full Name' 
              value={form.fullName} 
              handleChangeText={(value) => setForm({ ...form, fullName: value })} 
            />
            <FormField 
              fieldType='text' 
              title='Username' 
              value={form.username} 
              handleChangeText={(value) => setForm({ ...form, username: value })} 
            />
            <FormField 
              fieldType='text' 
              title='Email' 
              value={form.email} 
              handleChangeText={(value) => setForm({ ...form, email: value })} 
            />
            <FormField 
              fieldType='text' 
              title='Password' 
              value={form.password} 
              handleChangeText={(value) => setForm({ ...form, password: value })} 
            />
            <FormField 
              fieldType='deaf' 
              title='Are you deaf?' 
              value={form.isDeaf} 
              handleChangeText={(value) => setForm({ ...form, isDeaf: value })} 
            />
            <FormField 
              fieldType='langpref' 
              title='Language Preference' 
              value={form.langPref} 
              handleChangeText={(value) => setForm({ ...form, langPref: value })} 
            />
          </View>
          <CustomButton title='Sign Up' handlePress={() => { console.log(form) }} />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' barStyle="light-content" />
    </SafeAreaView>
  );
};


export default SignUp

const styles = StyleSheet.create({})