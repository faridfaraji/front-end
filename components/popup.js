import React from 'react';
import { StyleSheet, Text, View, Menu } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import Dialog, { DialogContent } from 'react-native-popup-dialog';


export default class Popup extends React.Component {

  state = {
    isLoadingComplete: false,
  };

  render() {


   return (
    <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>
    Shikhar is too sensitive?
    </DialogContent>
  </Dialog>
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
