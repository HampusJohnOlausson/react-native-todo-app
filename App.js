import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'go to the gym', key: '1' },
    { text: 'But groceries', key: '2' },
    { text: 'call the insurance company', key: '3' }
  ]);
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text>{item.text}</Text>
        )}
        />
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
