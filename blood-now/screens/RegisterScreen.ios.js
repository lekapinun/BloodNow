import React, { Component, PropTypes } from 'react';
import { Text, ScrollView, StyleSheet, View, Modal, Image, ActivityIndicator } from 'react-native';
import { Font } from 'expo';
import DatePicker from 'react-native-datepicker';
import { NavigatorBackground, Button, RegisterInput, PickerPartTouch, PickerModalDate, PickerModalBlood, PickerModalProvince } from '../components/common';

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
        name: '',
        password: '',
        password_confirmation: '',
        blood: '',
        bloodTemp: '',
        blood_type: '',
        blood_typeTemp: '',
        phone: '',
        email: '',
        province: '',
        provinceTemp: 'กรุงเทพมหานคร',
        birthyear: '',
        last_date_donate: '',
        date_donate: '',
        date_donateTemp: new Date(),
        modalVisible: false,
        modalDateVisible: false,
        modalRegisterVisible: false,
        modalProvinceVisible: false,
        load: false,
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    setModalDateVisible(visible) {
      this.setState({modalDateVisible: visible});
    }

    setModalProvinceVisible(visible) {
      this.setState({modalProvinceVisible: visible});
    }

    setModalRegisterVisible(visible){
      this.setState({modalProvinceVisible: visible});
    }

    clickOkay(){
      this.props.navigator.pop();
    }

    renderValidatedUsername(){
      let temp = this.state.name;
      if(temp !== ''){
        if(temp.search(/[^A-Za-z]/) !== -1){
          return <Text>ไม่สามารถใช้ตัวเลขหรือเว้นวรรคได้</Text>;
        }
      }
      return <Text/>;
    }

    renderValidatedPhone(){
      if(this.state.phone !== ''){
        if(this.state.phone.search(/[^0-9]/) !== -1){
          return <Text>กรุณาตรวจสอบเบอร์โทรศัพท์</Text>;
        }
      }
      return <Text/>;
    }

    renderValidatedEmail(){
      let temp = this.state.email;
      if(temp !== ''){
        if(temp.search('@') === -1){
          return <Text>กรุณาใส่ e-mail</Text>;
        }
      }
      return <Text/>;
    }

    renderValidatedBirthYear(){
      let today = new Date();
      if(this.state.birthyear !== ''){
        if(this.state.birthyear.toString() > (today.getFullYear()+543).toString()){
          return <Text>กรุณาตรวจสอบปีเกิด</Text>;
        }else if(this.state.birthyear.search(/[^0-9]/) !== -1){
          return <Text>กรุณาตรวจสอบปีเกิด</Text>;
        }
      }
      return <Text/>;
    }

    renderValidatedPasswordCon(){
      if(this.state.password !== this.state.password_confirmation && this.state.password !== '' && this.state.password_confirmation !== ''){
        return <Text>รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน</Text> ;
      }
      return <Text/>;
    }

    renderValidatedPassword(){
      if(this.state.password !== '' && this.state.password.length < 6){
        return <Text>รหัสผ่านต้องมากกว่า 5 ตัวอักษร</Text> ;
      }
      return  <Text/>;
    }

    render() {
        let blood;
        if(this.state.blood !== ''){
            blood = <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{this.state.blood + this.state.blood_type }</Text>;
        }else{
            blood = <Text />
        }
        let recentDate;
        if(this.state.date_donate !== ''){
            recent = new Date(this.state.date_donate);
            this.state.date_donateTemp = recent.getFullYear().toString() + '-' + (recent.getMonth()+1).toString() + '-' + recent.getDate().toString();
            recentDate = <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{this.state.date_donateTemp}</Text>
        }else{
            recentDate = <Text />
        }

        let canSubmit = '000000000';
        (this.state.name !== '' && this.state.name.search(/[^A-Za-z]/) === -1) ? canSubmit = canSubmit.replaceAt(0,'1') : canSubmit = canSubmit.replaceAt(0,'0') ;
        (this.state.password === this.state.password_confirmation && this.state.password !== '' && this.state.password_confirmation !== '') ? canSubmit = canSubmit.replaceAt(1,'1') : canSubmit = canSubmit.replaceAt(1,'0');
        (this.state.password !== '' && this.state.password.length > 5) ? canSubmit = canSubmit.replaceAt(2,'1') : canSubmit = canSubmit.replaceAt(2,'0');
        (this.state.blood !== '' && this.state.blood_type !== '') ? canSubmit = canSubmit.replaceAt(3,'1') : canSubmit = canSubmit.replaceAt(3,'0');
        (this.state.phone !== '' && this.state.phone.search(/[^0-9]/) === -1) ? canSubmit = canSubmit.replaceAt(4,'1') : canSubmit = canSubmit.replaceAt(4,'0') ;
        (this.state.email !== '' && this.state.email.search("@") !== -1 && this.state.email.search(".com") !== -1) ? canSubmit = canSubmit.replaceAt(5,'1') : canSubmit = canSubmit.replaceAt(5,'0') ;
        let today = new Date();
        ((parseInt(this.state.birthyear.toString()) > parseInt((today.getFullYear()+443).toString())) && (parseInt(this.state.birthyear.toString()) < parseInt((today.getFullYear()+543).toString()))) ? canSubmit = canSubmit.replaceAt(6,'1') : canSubmit = canSubmit.replaceAt(6,'0');
        (this.state.date_donate !== '') ? canSubmit = canSubmit.replaceAt(7,'1') : canSubmit = canSubmit.replaceAt(7,'0');
        (this.state.province !== '') ? canSubmit = canSubmit.replaceAt(8,'1') : canSubmit = canSubmit.replaceAt(8,'0');

        let ButtonSubmit;
        if(this.state.load === true){
          ButtonSubmit = <ActivityIndicator size="large" color='#E84A5F'/> ;
        }else{
          if(canSubmit === '111111111'){
            ButtonSubmit = 
              <Button
                title='สร้างบัญชี'
                buttonColor='#E84A5F'
                sizeFont={25}
                onPress={this._register}
                ButtonWidth={300}
                ButtonHeight={50}
              />;
          }else{
            ButtonSubmit = 
              <Button
                touchable={true}
                title='สร้างบัญชี'
                buttonColor='#F6B6BF'
                sizeFont={25}
                onPress={() => {}}
                ButtonWidth={300}
                ButtonHeight={50}
              />;
          }
        }
        

        return(
            <ScrollView style={{flex:1, paddingTop: 15 ,backgroundColor: '#FAFAFA' }}>
              <Text>{canSubmit}</Text>
                <ModalRegister
                  pickerVisible = {this.state.modalRegisterVisible}
                  onPress = { () => this.clickOkay() }
                >
                </ModalRegister>
                <PickerModalDate
                  pickerVisible = {this.state.modalDateVisible}
                  onPressCancel = {() => { this.setModalDateVisible(!this.state.modalDateVisible) }}
                  onPressSubmit = {() => {
                      this.setState({date_donate: this.state.date_donateTemp});
                      this.setModalDateVisible(!this.state.modalDateVisible);
                  }}
                  selectOne = {this.state.date_donateTemp}
                  onChangeOne = {date => this.setState({ date_donateTemp: date })}
                />
                <PickerModalProvince
                  pickerVisible = {this.state.modalProvinceVisible}
                  onPressCancel = {() => { this.setModalProvinceVisible(!this.state.modalProvinceVisible) }}
                  onPressSubmit = {() => {
                      this.setState({province: this.state.provinceTemp});
                      this.setModalProvinceVisible(!this.state.modalProvinceVisible);
                  }}
                  selectOne = {this.state.provinceTemp}
                  onChangeOne = {(itemValue, itemIndex) => this.setState({provinceTemp: itemValue}) }
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
                      {this.renderValidatedUsername()}
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
                      {this.renderValidatedPhone()}
                      <RegisterInput
                        label='อีเมลล์'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        keyboardType='email-address'
                        maxLength={30}
                      />
                      {this.renderValidatedEmail()}
                      <PickerPartTouch
                        label='จังหวัด'
                        onPress={() => this.setModalProvinceVisible(true)}
                        information={<Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{this.state.province}</Text>}
                      />
                      <RegisterInput
                        label='ปีเกิด(พ.ศ.)'
                        value={this.state.birthyear}
                        onChangeText={(birthyear) => this.setState({birthyear})}
                        keyboardType='numeric'
                        maxLength={4}
                      />
                      {this.renderValidatedBirthYear()}
                      <PickerPartTouch
                        label='บริจาคครั้งล่าสุด'
                        onPress={() => { this.setModalDateVisible(true) }}
                        information={recentDate}
                      />
                  </View>
                  <View style={{marginTop: 30}}>
                    {ButtonSubmit}
                  </View>
                <View style={{height:50}}/>
              </View>
            </ScrollView>
        );
    }

    _register = () => {
      recent2 = new Date(this.state.date_donate);
      this.state.last_date_donate = recent2.getFullYear().toString() + '-' + (recent2.getMonth()+1).toString() + '-' + recent2.getDate().toString();
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
        .then((response) => response.text())
        .then((responseText) => {
          console.log(responseText);
          if(responseText === 'Register Success'){
            setTimeout(() => {
              this.setState({modalRegisterVisible: true});
              this.setState({load: false});
            },100);
          }else{
            console.log('Register Fail');
            this.setState({load: false});
          }
        })
        .catch((error) => {
          this.setState({load: false});
          console.log(error);
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

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}