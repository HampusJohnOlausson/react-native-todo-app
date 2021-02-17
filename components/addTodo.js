import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }){

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
             style={styles.input}
             placeholder="Add new todo..."
             onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add' color='#61DAFB'/> 
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        marginTop: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#61DAFB',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        
    }
})