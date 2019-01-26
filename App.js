import React from 'react';
import { StyleSheet, Text, View, Menu } from 'react-native';
import UserLocation from './components/userloc.js'
import AppDrawerNavigator from './components/sidebar.js'

export default class App extends React.Component {
  render() {


   return (
   <AppDrawerNavigator/>
   
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
