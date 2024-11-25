import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const profile = () => {

    const [userProfileData, setUserProfileData] = useState({});

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                const response = await fetch('https://bhashasaar-sih-2024.vercel.app/api/v1/auth/userauth', {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const res_data = await response.json();
                setUserProfileData(res_data.userData)
            } catch (error) {
                console.log("Failed to get profile data!!")
            }
        }
        getUserData()
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image
                    style={styles.avatar}
                    source={{ uri: `${userProfileData.profile}` }}
                />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>{userProfileData.fullName}</Text>
                        <Text style={styles.info}>Username : @{userProfileData.username}</Text>
                    </View>
                </View>
            </View>
            <StatusBar backgroundColor='#ffa001' barStyle="light-content" />
        </>
    )
}

export default profile

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffa001',
        height: 200,
    },
    container: {
        flex: 1,
        backgroundColor: '#232533'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: 'white',
        fontWeight: '600',
    },
    info: {
        fontSize: 16,
              letterSpacing: 1,
              fontWeight: '100',
              color: 'white',
              marginTop: 5,
    },
    description: {
        fontSize: 16,
        color: '#bababa',
        marginTop: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#00BFFF',
    },
});