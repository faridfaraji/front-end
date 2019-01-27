import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet,Image, ImageBackground } from 'react-native';
import { Constants, Location, Permissions,TaskManager} from 'expo';
import { MapView } from 'expo';
import dummyData from '../dummy.json'

class Venues extends Component {
    constructor(props) {
        super(props);
     this.state = { 
      location: {coords: { latitude: 49.292, longitude: -123.116226}},
     Venues: [{
      title: 'hello',
      coordinates: {
        latitude: 49.2606,
        longitude: -123.2460 
      },
    },
    {
      title: 'hello',
      coordinates: {
        latitude: 49.2726,
        longitude: -123.1485
      },  
    }],
     locationResult: "babe",
    
    };}
 
    componentDidMount = async() =>{
      this.setState({
        Venues : dummyData
      });

    }

 




  render() {
    var custom_marker2 = '../assets/images/flame1.png';
    var custom_marker1 = '../assets/images/currLoc2.png';
    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        {this.state.Venues.map(venue => (
        <MapView.Marker
        style={{width:10}} 
        coordinate={venue.coordinates}
        title={"Farid is here"}
        description={"cunt"}
        //image ={require(custom_marker1)}
       >
       <Image
       source = {require(custom_marker2)}
       style={{width:35, height:35}}
       ></Image>

      </MapView.Marker>))}
      <Text style ={styles.paragraph}>
      Location: {JSON.stringify(this.state.Venues)}
      
        </Text>
      
      </MapView>
      );
  }
}



  

  const styles = StyleSheet.create({

    paragraph: {
        marginTop: 24,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
      },

});


export default Venues
