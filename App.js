import React, { useState} from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
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

  const submitHandler = (text) => {

      setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString()}, 
        ...prevTodos
      ];
    });
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
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
    flex: 1,
    padding: 30,
  }, 
  list: {
    flex: 1,
    marginTop: 20,

  }
});
