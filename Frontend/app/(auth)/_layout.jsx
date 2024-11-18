import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen name='signin' options={{
          headerShown: false,
          animation: 'none',
        }} />
        <Stack.Screen name='signup' options={{
          headerShown: false,
          animation: 'none',
        }} />
      </Stack>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})