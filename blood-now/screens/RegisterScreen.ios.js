import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Picker,
  StyleSheet,
  Button,
  View,
  Platform,
  Modal,
} from 'react-native';
import { Font } from 'expo';
import DatePicker from 'react-native-datepicker';
import {ProvincePicker} from '../components/common';

export default class RegisterScreen extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        bloodType: '',
        bloodTypeTemp: '',
        phoneNumber: '',
        email: '',
        province: '',
        birthYear: '',
        recentDonateDate: '',
        modalVisible: false,
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
    onRegisterPress = () => {

    }
    render() {
        return(
            <ScrollView style={{ marginTop: 30 }}>
              <Modal
                style={{ paddingTop: 300 }}
                animationType={"slide"}
                transparent={true}
                visible={this.state.modalVisible}
                >
                <View style={{ flex: 1 , }}>
                  <View style={{ flex: 0.65 }} />
                  <View style={{ flex: 0.35, backgroundColor:'white', borderColor:'grey', borderWidth: 1 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' , alignItems:'flex-start',  }}>
                      <Button title='Cancel' onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                      }}/>
                      <Button title='Confirm' onPress={() => {
                        this.setState({bloodType: this.state.bloodTypeTemp});
                        this.setModalVisible(!this.state.modalVisible);
                      }}/>
                    </View>
                  <Picker
                    selectedValue={this.state.bloodTypeTemp}
                    onValueChange={(itemValue, itemIndex) => this.setState({bloodTypeTemp: itemValue})}
                  >
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="AB" value="AB" />
                    <Picker.Item label="O" value="O" />
                  </Picker>
                </View>
               </View>
              </Modal>


              <ProvincePicker navigator={this.props.navigator} />

              <View style={styles.container}>
                <Text>REGISTER SCREEN</Text>
              </View>
              <View style={styles.container}>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    placeholder="ชื่อผู้ใช้์"
                />
              </View>
              <View style={styles.container}>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder="รหัสผ่าน"
                />
              </View>
              <View style={styles.container}>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
                    value={this.state.passwordConfirmation}
                    placeholder="ยืนยันรหัสผ่าน"
                />
              </View>
              <TouchableOpacity
                onPress={() => { this.setModalVisible(true) }}
              >
                <View style={styles.pickerContainer}>
                    <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{'Blood Type: '+this.state.bloodType}</Text>
                  </View>
              </TouchableOpacity>
              <View style={styles.container}>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                    value={this.state.phoneNumber}
                    placeholder="เบอร์โทรศัพท์"
                />
              </View>
              <View style={styles.container}>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="อีเมล์"
                />
              </View>
              <View style={styles.container}>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(birthYear) => this.setState({birthYear})}
                    value={this.state.birthYear}
                    placeholder="ปีเกิด(พ.ศ.)"
                    keyboardType= "numeric"
                />
              </View>
              <View style={[styles.container, {margin: 10}]} >
                <DatePicker
                  style={{width: 200}}
                  date={this.state.recentDonateDate}
                  mode="date"
                  format="YYYY-MM-DD"
                  maxDate= {new Date()}
                  minDate= "2015-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={(date) => {this.setState({recentDonateDate: date})}}
                />
              </View>
              <View style={[styles.container]}>
                <Button
                  title="ลงทะเบียน"
                  onPress={() => this.onRegisterPress}
                />
              </View>
            </ScrollView>
            /*<Picker>
              Province
            </Picker>
            <DatePicker birthYear/>*/
        );
    }

}

const styles = StyleSheet.create({
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
  input: {
    height: 50,
    width:270,
    borderColor: '#EEEDEE',
    borderWidth: 1,
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
    backgroundColor: 'white',
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
    width: 270,
    height: 50,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: '#EEEDEE',
    borderWidth: 1
  },
  pickerBody: {
  },
});
