import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style= {styles.title}>DW2A4</Text>

       <View style={styles.card}>
          <Text style={styles.cardTitle}> React Native </Text>
           <Text style={styles.cardSubtitle}> Aplicações mobile  </Text> 


       </View>
      
      
        
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034f84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ff9900'


  },

  card: {
    backgroundColor:'#9e001a',
    padding: 12,
    borderRadius: 2000


  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'





  },

  cardSubtitle: {

    color: '#034f84',
    fontSize: 14,



  },


});
