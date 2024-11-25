import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

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