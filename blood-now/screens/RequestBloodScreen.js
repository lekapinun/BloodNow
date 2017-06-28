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
    name: '',
    patientID: '',
    blood: '',
    blood_type: '',
    bloodUnit: '',
    description: '',
    hostpital: '',
    bloodTemp: 'A',
    blood_Temp: '+',
    modalBloodVisible: false,
    ConfirmationModalVisible: false,
    confirm: false,
  }
  setModalBloodVisible(visible) {
    this.setState({modalBloodVisible: visible});
  }
  setConfrimationModalVisible(visible) {
    this.setState({ConfirmationModalVisible: visible});
  }
  render() {

    if(this.state.blood !== ''){
        blood = <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{this.state.blood + this.state.blood_type }</Text>;
      }else{
        blood = <Text />
      }

    return(
      <ScrollView style={{flex: 1,flexDirection: 'column', backgroundColor: '#FAFAFA'}}>
          <PickerModalBlood
                pickerVisible = {this.state.modalBloodVisible}
                onPressCancel = {() => { this.setModalBloodVisible(!this.state.modalBloodVisible)}}
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
                    this.setModalBloodVisible(!this.state.modalBloodVisible);
                }}
                selectOne = {this.state.bloodTemp}
                onChangeOne = {(itemValue, itemIndex) => this.setState({bloodTemp: itemValue})}
                selectTwo = {this.state.blood_typeTemp}
                onChangeTwo = {(itemValue2, itemIndex2) => this.setState({blood_typeTemp: itemValue2})}
            />


          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.ConfirmationModalVisible}
          >
            <View
              style={{backgroundColor:'rgba(131, 145, 146,0.7)', flex:1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor:'white', width: 300, height: 300,flexDirection: 'column', justifyContent: 'space-between', }}>
              <View style={{ paddingTop: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"ชื่อผู้ป่วย"}</Text>
                  <Text>{this.state.name}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"รหัสผู้ป่วย"}</Text>
                  <Text>{this.state.patientID}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"กรุ๊ปเลือด "}</Text>
                  <Text>{this.state.bloodType}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"จำนวน(ยูนิต)"}</Text>
                  <Text>{this.state.bloodUnit}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"รายละเอียด"}</Text>
                  <Text>{this.state.description}</Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"สถานพยาบาล"}</Text>
                  <Text>{this.state.hostpital}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start', borderColor: 'black', borderWidth: 1}}>
                <Button title='Cancel' onPress={() => {
                  this.setConfrimationModalVisible(!this.state.ConfirmationModalVisible)
                }}/>
                <Button title='Confirm' onPress={() => {
                  this.setState({confirm: this.state.bloodTypeTemp});
                  this.setConfrimationModalVisible(!this.state.ConfirmationModalVisible)
                }}/>
              </View>
            </View>
          </View>
          </Modal>

          <View style={{alignItems: 'center'}}>
            <View style={{width: 310,marginTop:15}}>
              <InputText
                label = 'ชื่อผู้ป่วย'
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
              <InputText
                label = 'รหัสผู้ป่วย'
                onChangeText={(patientID) => this.setState({patientID})}
                value={this.state.patientID}
              />
              <PickerPartTouch
                label='กรุ๊ปเลือด'
                onPress={() => this.setModalBloodVisible(true)}
                information={blood}
              />
              <InputText
                label = 'จำนวนเลือดที่ต้องการ(ยูนิต)'
                onChangeText={(bloodUnit) => this.setState({bloodUnit})}
                value={this.state.bloodUnit}
                keyboardType='number-pad'
              />
              <InputTextLarge
                label = 'รายละเอียด'
                onChangeText={(description) => this.setState({description})}
                value={this.state.description}
              />
              <InputText
                label = 'สถานพยาบาล'
                onChangeText={(hostpital) => this.setState({hostpital})}
                value={this.state.hostpital}
              />
            </View>
            <View style={{marginTop:40}}></View>
            <Map />
            <View style={{marginTop:40}}></View>
            <Button
              title="ส่งคำขอ"
              onPress={() => {}}
              buttonColor='#E84A5F'
              sizeFont={25}
              ButtonWidth={300}
              ButtonHeight={50}
              colorFont='white'
            />
            </View>
      </ScrollView>
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
