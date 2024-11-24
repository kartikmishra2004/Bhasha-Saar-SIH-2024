import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/customButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Redirect, router } from 'expo-router'

const Settings = () => {

    const [isLogin, setIsLogin] = useState('');

    const Logout = async () => {
        await AsyncStorage.removeItem('token');
        setIsLogin('')
    }

    const getLogin = async () => {
        const token = await AsyncStorage.getItem('token');
        setIsLogin(token);
      }

    useEffect(() => {
        getLogin();
    }, [isLogin])

    if (isLogin) {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, color: 'white' }}>
                    <CustomButton title={'Logout'} handlePress={() => Logout()} />
                </Text>
                <StatusBar backgroundColor='#ffa001' barStyle="light-content" />
            </View>
        )
    } else {
        return <Redirect href={'/signin'} />
    }
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#232533'
    }
})