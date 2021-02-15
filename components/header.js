import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header(){
    return (
        <View style={Styles.header}>
            <Text style={Styles.title}>What Shall I Do Today...</Text>
        </View>
    )
}


const Styles= StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#ff304f',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontFamily: 'poppins',
        fontWeight: 'bold'
    }
})

