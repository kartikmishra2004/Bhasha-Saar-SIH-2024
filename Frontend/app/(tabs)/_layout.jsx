import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen name='home' options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <FontAwesome name="home" size={24} color={color} />
        )
      }}/>
      <Tabs.Screen name='chat' options={{
        title: 'Chat',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <FontAwesome name="wechat" size={24} color={color} />
        )
      }}/>
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <FontAwesome name="user" size={24} color={color} />
        )
      }}/>
      <Tabs.Screen name='settings' options={{
        title: 'Settings',
        headerShown: false,
        tabBarIcon: ({color, focused}) => (
          <FontAwesome name="gear" size={24} color={color} />
        )
      }}/>
    </Tabs>
    </>
  )
}

export default TabLayout

const styles = StyleSheet.create({})