import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Modal, TouchableOpacity, Picker, StyleSheet, } from 'react-native';
import { Font } from 'expo';
import { StackNavigation } from '@expo/ex-navigation';
import { Map, InputText, InputTextLarge , PickerPartTouch, PickerModalDate, PickerModalBlood, Button} from '../components/common';
import Colors from '../constants/Colors';

export default class RequestBloodScreen extends Component {
  static route = {
    navigationBar: {
      title: 'คำร้องขอรับบริจาค',
      backgroundColor: Colors.routeColor,
      titleStyle: [Font.style('CmPrasanmitBold'),{fontSize:25}],
      tintColor: 'white',
    },
  };

  state = {

  }

  render() {

    return(
      <Text>asdfdsafdsafdsafdsafdsaf</Text>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width:270,
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
    backgroundColor: 'white',
  },
  headerContainerStyle: {

  },
  headerStyle: {

  },
  bodyContainerStyle: {
    alignSelf: 'center',
    borderColor: '#EEEDEE',
    borderBottomWidth: 1,
    margin: 10,
  },
  bodyMultiLineContainerStyle: {
    borderColor: '#EEEDEE',
    borderWidth: 1,
    alignSelf: 'center',
    width: 300,
    height: 150,
    padding: 10,
    fontSize: 23,
  },
  pickerText:{
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
  },
  container: {
    alignSelf: 'center',
  },
  pickerContainer: {
    height: 50,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: '#EEEDEE',
    borderWidth: 1
  },
});
