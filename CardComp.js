import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';



export default class CardComp extends Component{
  userData=require('./data.json')
  render() {
    return(
      <ScrollView contentContainerStyle={{paddingBottom:150}}>
        {this.userData.map((data)=>{
    return (
      <View style={styles.cardContainer}>
      <View style={styles.cardHead}>
      <View style={styles.headLeft}>
      <Image source={{uri:data.profilePhoto}}
        style={{width: 60, height: 60,borderRadius:50}} />
        <Text style={styles.userName}>{data.userName}{"\n"}<Text style={styles.userId}>{data.userId}</Text></Text>
      </View>
      <View style={styles.headRight}>
      <Text style={styles.time}>{data.time}{"\n"}<Text style={styles.location}>{data.location}</Text></Text>
      </View>
      </View>
      <View style={styles.cardFoot}>
      <Image source={{uri:data.mainPhoto}}
        style={{ height: 200,margin:5}} />
      <Text style={styles.description}>{data.description}</Text>
      </View>
      </View>
    );
  })}
  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer:{
    height:400,
    margin:5,
    backgroundColor:'beige',
    padding:10,
},
  headLeft:{
    flexDirection:'row',
  },
  headRight:{
    flexDirection:'row',
  },
    cardHead:{
        // height:300,
        // margin:5,
        backgroundColor:'beige',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
    },
    userName:{
      color:'black',
      fontSize:18,
      margin:4,
    },
    userId:{
      color:'red',
      fontSize:16,
      margin:4,
    },
    time:{
      color:'black',
      fontSize:16,
      margin:4,
      marginLeft:80,
      marginTop:10
    },
    location:{
      color:'red',
      fontSize:16,
      margin:4,
      marginLeft:80,
    },
     description:{
      color:'black',
      margin:5,
    },
});
