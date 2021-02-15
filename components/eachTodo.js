import React, { Component } from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15, 
        marginTop: 15,
        borderColor: '#61DAFB',
        color: '#fff',
        borderWidth: 3,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
})