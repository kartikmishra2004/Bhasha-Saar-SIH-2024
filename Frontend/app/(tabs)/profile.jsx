import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, color: 'white'}}>Profile</Text>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#232533'
    }
})