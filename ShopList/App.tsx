import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const addItem = item => {
    if (!item) {
      Alert.alert('OUPS', 'Please Enter an Item To Add It');
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text: item}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default App;
