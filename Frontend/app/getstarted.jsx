import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import logo from "../assets/images/img.png";
import deaf from "../assets/images/Deaf.png";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/customButton";
import { Redirect, router } from "expo-router";

export default function GetStarted() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%', backgroundColor: '#161622' }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#161622",
            gap: 60,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{
              flexDirection: 'row',
              marginLeft: 50,
            }}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  marginBottom: 20,
                }}
                source={logo}
              />
              <Text
                style={{
                  marginLeft: 10,
                  width: 300,
                  fontSize: 30,
                  fontFamily: 'Inder',
                  color: 'white',
                  fontWeight: '900'
                }}
              >Continue to <Text style={{ color: '#ffa001' }}>Ashakt bhashini</Text>
              </Text>
            </View>
            <Text style={{
              fontSize: 16,
              letterSpacing: 1,
              fontWeight: '100',
              color: 'white',
              marginTop: 10
            }}>Empower Communication, One Tap Away.</Text>
            <Image
              style={{
                width: 250,
                height: 200,
                marginTop: 50,
              }}
              source={deaf}
            />
          </View>
          <CustomButton title='Get started' handlePress={() => { router.push('/signup') }} />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' barStyle="light-content" />
    </SafeAreaView>
  );
}
