import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, isDisabled }) => {
    return (
        <TouchableOpacity
            disabled={isDisabled}
            onPress={handlePress}
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: `${!isDisabled ? '#ffa001' : '#232533'}`,
                borderRadius: 30,
                width: 320,
                height: 55,
            }}
            activeOpacity={0.7}
        >
            <Text
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: 320,
                    color: "white",
                    fontSize: 16,
                    fontFamily: 'Inder'
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({})