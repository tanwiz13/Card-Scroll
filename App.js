import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import CardComp from './CardComp'



export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.welcome}>Trending</Text>
      </View>
      <View>
        <CardComp></CardComp>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header:{
    backgroundColor:'#f76636',
  },
  welcome: {
    // flex:1,
    fontSize: 30,
    color:'white',
    alignSelf:'center',
    margin:10,
  },
  instructions: {
    // flex:1,
    backgroundColor: 'green',
    margin:10,
    fontSize:20,
  },
});
