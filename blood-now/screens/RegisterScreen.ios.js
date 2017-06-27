import React, { Component, PropTypes } from 'react';
import { Text, ScrollView, StyleSheet, View, Modal, Image, ActivityIndicator,AsyncStorage } from 'react-native';
import { Font } from 'expo';
import DatePicker from 'react-native-datepicker';
import { NavigatorBackground, Button, RegisterInput, PickerPartTouch, PickerModalDate, PickerModalBlood, PickerModalProvince } from '../components/common';

import addressServer from '../utilities/addressServer';

export default class RegisterScreen extends Component {

    static route = {
        navigationBar: { 
            title: 'ลงทะเบียน',
            backgroundColor: '#E84A5F',
            titleStyle: [Font.style('CmPrasanmitBold'),{fontSize:29}],
            tintColor: 'white',
        },
        style : {
            gettures: null,
        }
    };

    state = {
        name: '',
        password: '',
        password_confirmation: '',
        phone: '',
        email: '',
    }


    render() {
      let canSubmit = '00000';
      (this.state.name !== '' && this.state.name.search(/[^A-Za-z]/) === -1) ? canSubmit = canSubmit.replaceAt(0,'1') : canSubmit = canSubmit.replaceAt(0,'0') ;
      (this.state.password === this.state.password_confirmation && this.state.password !== '' && this.state.password_confirmation !== '') ? canSubmit = canSubmit.replaceAt(1,'1') : canSubmit = canSubmit.replaceAt(1,'0');
      (this.state.password !== '' && this.state.password.length > 5) ? canSubmit = canSubmit.replaceAt(2,'1') : canSubmit = canSubmit.replaceAt(2,'0');
      (this.state.phone !== '' && this.state.phone.search(/[^0-9]/) === -1) ? canSubmit = canSubmit.replaceAt(3,'1') : canSubmit = canSubmit.replaceAt(3,'0') ;
      (this.state.email !== '' && this.state.email.search("@") !== -1 && this.state.email.search(".com") !== -1) ? canSubmit = canSubmit.replaceAt(4,'1') : canSubmit = canSubmit.replaceAt(4,'0') ;
      let ButtonSubmit;
      if(canSubmit === '11111'){
        ButtonSubmit = 
          <Button
            title='ถัดไป'
            buttonColor='#E84A5F'
            sizeFont={25}
            onPress={this._goToRegister2}
            ButtonWidth={300}
            ButtonHeight={50}
            colorFont='white'
          />;
      }else{
        ButtonSubmit = 
          <Button
            touchable={true}
            title='ถัดไป'
            buttonColor='#F6B6BF'
            sizeFont={25}
            onPress={() => {}}
            ButtonWidth={300}
            ButtonHeight={50}
            colorFont='white'
          />;
      }

      return(       
        <View style={{flex: 1,flexDirection: 'column',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
          <View style={{marginTop: 20}}/>
          <Text style={{color: '#E84A5F'}}>● ○</Text>
          <RegisterInput
            label='ชื่อผู้ใช้'
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
            maxLength={20}
            placeholder='เฉพาะตัวอักษร'
          />
          <RegisterInput
            label='รหัสผ่าน'
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            maxLength={30}
            placeholder='อย่างน้อย 6 ตัว'
          />
          <RegisterInput
            label='ยืนยันรหัสผ่าน'
            value={this.state.password_confirmation}
            onChangeText={(password_confirmation) => this.setState({password_confirmation})}
            secureTextEntry={true}
            maxLength={20}
          />
          <RegisterInput
            label='อีเมลล์'
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            keyboardType='email-address'
            maxLength={30}
          />
          <RegisterInput
            label='เบอร์โทรศัพท์'
            value={this.state.phone}
            onChangeText={(phone) => this.setState({phone})}
            keyboardType='numeric'
            maxLength={10}
          />
          <View style={{marginTop: 40}}/>
          {ButtonSubmit}
        </View>
      );
    }
    
    _goToRegister2 = () => {
      const data = this.state;
      AsyncStorage.setItem('@RegisData:key', JSON.stringify(data))
      .then(() => {
        this.props.navigator.push('register2');
      })
      .catch((error) => {
        console.log(error);
      });
    };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerText: {
    paddingLeft:10,
    fontSize: 25,
  }
});

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}