import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header(){
    return (
        <View style={Styles.header}>
            <Text style={Styles.title}>My Todos</Text>
        </View>
    )
}


const Styles= StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#ff304f',
    }
})

