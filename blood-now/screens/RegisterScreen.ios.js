import React, { Component, PropTypes } from 'react';
import { Text, ScrollView, StyleSheet, View, Modal, Image, ActivityIndicator } from 'react-native';
import { Font } from 'expo';
import DatePicker from 'react-native-datepicker';
import { NavigatorBackground, Button, RegisterInput, PickerPartTouch, PickerModalDate, PickerModalBlood } from '../components/common';

export default class RegisterScreen extends Component {

    static route = {
        navigationBar: { 
            title: 'ลงทะเบียน',
            backgroundColor: '#E84A5F',
            titleStyle: [Font.style('CmPrasanmitBold'),{fontSize:29}],
            tintColor: 'white',
        },
    };

    state = {
        name: null,
        password: '',
        password_confirmation: '',
        blood: '',
        bloodTemp: '',
        blood_type: '',
        blood_typeTemp: '',
        phone: '',
        email: '',
        province: 'เชียงใหม่',
        birthyear: '',
        last_date_donate: '',
        last_date_donateTemp: new Date(),
        modalVisible: false,
        modalDateVisible: false,
        modalRegisterVisible: false,
        load: false,
    }


    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    setModalDateVisible(visible) {
      this.setState({modalDateVisible: visible});
    }

    setModalRegisterVisible(visible){
      this.setState({modalRegisterVisible: visible});
    }

    clickOkay(){
      this.props.navigator.pop();
    }

    renderButton(){
      if(this.state.load === true){
        return( <ActivityIndicator size="large" color='#E84A5F'/> );
      }
      return(
        <Button
          title='สร้างบัญชี'
          buttonColor='#E84A5F'
          sizeFont={25}
          onPress={this._register}
          ButtonWidth={300}
          ButtonHeight={50}
        />
      );
    }

    renderValidatedPasswordCon(){
      if(this.state.password !== this.state.password_confirmation && this.state.password !== '' && this.state.password_confirmation !== ''){
        return( <Text>รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน</Text> );
      }
      return ( <Text/>);
    }

    render() {
        let blood;
        if(this.state.blood !== ''){
            blood = <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{this.state.blood + this.state.blood_type }</Text>;
        }else{
            blood = <Text />
        }
        let recentDate;
        if(this.state.last_date_donate !== ''){
            recent = new Date(this.state.last_date_donate);
            this.state.last_date_donateTemp = recent.getFullYear().toString() + '-' + (recent.getMonth()+1).toString() + '-' + recent.getDate().toString();
            recentDate = <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{this.state.last_date_donateTemp}</Text>
        }else{
            recentDate = <Text />
        }
        return(
            <ScrollView style={{flex:1, paddingTop: 15 ,backgroundColor: '#FAFAFA' }}>
                <ModalRegister
                  pickerVisible = {this.state.modalRegisterVisible}
                  onPress = { () => this.clickOkay() }
                >
                </ModalRegister>
                <PickerModalDate
                  pickerVisible = {this.state.modalDateVisible}
                  onPressCancel = {() => { this.setModalDateVisible(!this.state.modalDateVisible) }}
                  onPressSubmit = {() => {
                      this.setState({last_date_donate: this.state.last_date_donateTemp});
                      this.setModalDateVisible(!this.state.modalDateVisible);
                  }}
                  selectOne = {this.state.last_date_donateTemp}
                  onChangeOne = {date => this.setState({ last_date_donateTemp: date })}
                />
                <PickerModalBlood
                  pickerVisible = {this.state.modalVisible}
                  onPressCancel = {() => { this.setModalVisible(!this.state.modalVisible)}}
                  onPressSubmit = {() => {
                    if(this.state.bloodTemp === ''){
                      this.setState({blood: 'A'});
                    }else{
                      this.setState({blood: this.state.bloodTemp});
                    }  
                    if(this.state.blood_typeTemp === ''){
                      this.setState({blood_type: '+'});
                    }else{
                      this.setState({blood_type: this.state.blood_typeTemp});
                    }          
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  selectOne = {this.state.bloodTemp}
                  onChangeOne = {(itemValue, itemIndex) => this.setState({bloodTemp: itemValue})}
                  selectTwo = {this.state.blood_typeTemp}
                  onChangeTwo = {(itemValue2, itemIndex2) => this.setState({blood_typeTemp: itemValue2})}
                />
                <View style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width : 310}}>
                      <RegisterInput
                        label='ชื่อผู้ใช้'
                        value={this.state.name}
                        onChangeText={(name) => this.setState({name})}
                        maxLength={20}
                      />
                      <RegisterInput
                        label='รหัสผ่าน'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        maxLength={20}
                      />
                      {this.renderValidatedPassword()}
                      <RegisterInput
                        label='ยืนยันรหัสผ่าน'
                        value={this.state.password_confirmation}
                        onChangeText={(password_confirmation) => this.setState({password_confirmation})}
                        secureTextEntry={true}
                        maxLength={20}
                      />
                      {this.renderValidatedPasswordCon()}
                      <PickerPartTouch
                        label='กรุ๊ปเลือด'
                        onPress={() => this.setModalVisible(true)}
                        information={blood}
                      />
                      <RegisterInput
                        label='เบอร์โทรศัพท์'
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({phone})}
                        keyboardType='numeric'
                        maxLength={10}
                      />
                      <RegisterInput
                        label='อีเมลล์'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        keyboardType='email-address'
                        maxLength={30}
                      />
                      <RegisterInput
                        label='ปีเกิด(พ.ศ.)'
                        value={this.state.birthyear}
                        onChangeText={(birthyear) => this.setState({birthyear})}
                        keyboardType='numeric'
                        maxLength={4}
                      />
                      <PickerPartTouch
                        label='บริจาคครั้งล่าสุด'
                        onPress={() => { this.setModalDateVisible(true) }}
                        information={recentDate}
                      />
                  </View>
                  <View style={{marginTop: 30}}>
                    {this.renderButton()}
                  </View>
                <View style={{height:50}}/>
              </View>
            </ScrollView>
        );
    }
s
    _register = () => {
      console.log(this.state);
      this.setState({load: true});
      if( this.state.password === this.state.password_confirmation){
        const myRequest = new Request(
          'http://localhost:8000/register',
          {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
          });
        fetch(myRequest)
        .then((response) => {
          if( response._bodyInit != 'login fail')
          {
            console.log('register success');
            setTimeout(() => {
              this.setState({modalRegisterVisible: true});
              this.setState({load: false});
            },2500);
          }
          else
          {
            console.log('fail');
          }
        })
        .catch((error) => {
            console.log('fail resgister');
        });
      }
      else {
        console.log('fail resgister');
      }
        
    }
}

const ModalRegister = ({pickerVisible,onPress}) => {
  return(
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={pickerVisible}
      >
        <View style={[styles.container,{flex:1,backgroundColor:'rgba(52, 52, 52, 0.3)'}]}>
          <View style={{paddingTop:25,alignItems: 'center',height:190,width:220,backgroundColor:'#E84A5F'}}>
            <Image source={require('../assets/icons/correct.png')} style={{height:70,width:70}}/>
            <Text style={[Font.style('CmPrasanmitBold'),{paddingTop:5,fontSize:27,color: 'white'}]}>ลงทะเบียนสำเร็จ</Text>
            <View style={{borderBottomColor: '#F4ADB7', width:200, marginTop:20,borderBottomWidth: 1,}}/>
            <View>
              <Button
                onPress={onPress}
                buttonColor='#E84A5F'
                title='ตกลง'
                sizeFont={20}
                ButtonWidth={200}
              />
            </View> 
          </View>
        </View>
      </Modal>
  );
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


