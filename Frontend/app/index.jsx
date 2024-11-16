import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{fontSize: 30}}>Hello!!</Text>
      <Link style={{color: 'white', padding: 20, backgroundColor: 'grey'}} href='/home' >Go to Home</Link>
    </View>
  );
}
