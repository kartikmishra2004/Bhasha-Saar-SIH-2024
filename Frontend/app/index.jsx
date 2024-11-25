import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import logo from "../assets/images/img.png";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/customButton";
import { Redirect, router } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Index() {

  const [isLogin, setIsLogin] = useState('')

  const getLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    setIsLogin(token);
  }

  useEffect(() => {
    getLogin();
  }, [])

  if (!isLogin) {
    return (
      <SafeAreaView style={{ borderStartColor: '#161622' }}>
        <ScrollView style={{ borderStartColor: '#161622' }} contentContainerStyle={{ height: '100%', backgroundColor: '#161622' }}>
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
                  width: 150,
                  height: 150,
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
              >Welcome to <Text style={{ color: '#ffa001' }}>Ashakt bhashini</Text>
              </Text>
              <Text style={{
                fontSize: 16,
                letterSpacing: 1,
                fontWeight: '100',
                color: 'white',
                marginTop: 10
              }}>Breaking Barriers, Bridging Voices.</Text>
            </View>
            <CustomButton title='Next' handlePress={() => { router.push('/getstarted') }} />
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' barStyle="light-content" />
      </SafeAreaView>
    );
  } else {
    return <Redirect href={'/home'} />
  }
}
