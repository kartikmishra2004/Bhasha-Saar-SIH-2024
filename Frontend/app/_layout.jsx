import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading'
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <Stack screenOptions={{animation: 'none', headerShown: false, navigationBarColor: '#161622', contentStyle: {backgroundColor: '#161622'}}}>
    <Stack.Screen name="index" options={{animation: 'none'}}/>
  </Stack>;

}