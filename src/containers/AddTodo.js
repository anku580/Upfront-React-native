import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class TodoApp extends React.Component {
  render() {
    return (
      <View style={ styles.container}>
        <TextInput 
            placeholder = "Eg. Create New Video"
            style={{ borderWidth : 1, borderColor: '#f2f2e1',
            backgroundColor : '#eaeaea', height: 50, flex : 1, padding: 5}} 
        />
        <TouchableOpacity>
            <View style={{height:50, backgroundColor : '#eaeaea'}}>

            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    marginHorizontal : 20,
    marginTop: 20 
  },
});

