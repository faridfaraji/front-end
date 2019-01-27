import React, { Component } from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import UserLocation from './userloc.js'
import Setting from './settings.js'
import Notifications from './notifications.js'
import Venues from './venues.js'
import popup from './popup.js'

const NavStack = createDrawerNavigator(

  {
  Map:{ 
      screen: UserLocation,
     
  },
  Settings:{ 
    screen: Setting,
   
},
Venues:{ 
  screen: Venues,
 
},
Notification:{
  screen: Notifications,
},
Popout: {
  screen: popup
},
});


const AppDrawerNavigator = createAppContainer(NavStack);

export default AppDrawerNavigator;


