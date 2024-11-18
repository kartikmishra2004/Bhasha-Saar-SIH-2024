import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/img.png'
import loading from '../../assets/images/loading.gif'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/customButton'
import FormField from '../../components/formField'
import { router, redirect, Link, Redirect } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = () => {

  const [isLoading, setisLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    isDeaf: 'No',
    langPref: 'Hindi',
  });

  const [isLogin, setIsLogin] = useState('')

  const getLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    setIsLogin(token);
  }

  useEffect(() => {
    getLogin();
  }, [])

  const submitData = async () => {
    setisLoading(true);
    try {
      const data = await fetch('https://bhashasaar-sih-2024.vercel.app/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });
      const res_data = await data.json();
      await AsyncStorage.setItem('token', res_data.token);
      router.push('/signin');
      if (!data.ok) {
        Alert.alert("Invalid details!!", res_data.extraDetails ? res_data.extraDetails : res_data.message);
        setisLoading(false);
      } else {
        setForm({
          fullName: '',
          username: '',
          email: '',
          password: '',
          isDeaf: 'No',
          langPref: 'Hindi',
        })
        Alert.alert("Success!!", res_data.message);
        setisLoading(false);
      }
    } catch (error) {
      console.log("Failed to signup!!");
      setisLoading(false);
    }
  }

  if (isLogin) {
    return <Redirect href={'/home'} />;
  } else {
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
            {isLoading ?
              (<CustomButton isDisabled={true} title='Please wait...' handlePress={() => submitData()} />) :
              (<CustomButton isDisabled={!form.fullName || !form.username || !form.email || !form.password ? true : false} title='Sign Up' handlePress={() => submitData()} />)}

            <Link href={'/signin'} style={{
              fontSize: 16,
              letterSpacing: 1,
              fontWeight: '100',
              color: 'white',
              marginTop: 10
            }}>
              Already have an account?
            </Link>
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' barStyle="light-content" />
      </SafeAreaView>
    );
  }
};


export default SignUp

const styles = StyleSheet.create({})