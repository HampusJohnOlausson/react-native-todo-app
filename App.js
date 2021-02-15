import React, { useState} from 'react';
import Header from './components/header'
import TodoItem from './components/todoItem'
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'go to the gym', key: '1' },
    { text: 'But groceries', key: '2' },
    { text: 'call the insurance company', key: '3' }
  ]);
  
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  } 

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
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
  },
  content: {
    padding: 10,
  }, 
  list: {

  }
});
