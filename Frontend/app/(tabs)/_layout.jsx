import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TabLayout = () => {

  const [isLogin, setIsLogin] = useState('');

  const getLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
    setIsLogin(token);
    } else {
      setIsLogin('');
    }
  }

  useEffect(() => {
    getLogin();
  }, [])

  if (isLogin) {
    return (
      <>
        <Tabs screenOptions={{
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#cdcde0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopColor: '#232533',
            borderTopWidth: 0,
            boxShadow: '0px 0px',
            height: 60
          }
        }}>
          <Tabs.Screen name='home' options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="home" size={24} color={color} />
            )
          }} />
          <Tabs.Screen name='chat' options={{
            title: 'Chat',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="wechat" size={24} color={color} />
            )
          }} />
          <Tabs.Screen name='profile' options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="user" size={24} color={color} />
            )
          }} />
          <Tabs.Screen name='settings' options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="gear" size={24} color={color} />
            )
          }} />
        </Tabs>
      </>
    )
  } else {
    return <Redirect href={'/signin'} />
  }
}

export default TabLayout

const styles = StyleSheet.create({})