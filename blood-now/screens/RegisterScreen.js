import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import { Font } from 'expo';
import DatePicker from 'react-native-datepicker';

export default class RegisterScreen extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        bloodType: '',
        phoneNumber: '',
        email: '',
        //province: '',
        date:"2016-05-15",
        recentDonateDate: '',
    }
    onRegisterPress = () => {

    }
    render() {
        return(
            <ScrollView style={{marginTop:30, }}>
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
              <View style={{ width: 270, height: 50, marginTop: 10, alignSelf: 'center', borderColor: 'grey', borderWidth: 1 }}>
                <View style={{ width: 260, height: 50, alignSelf: 'center', borderBottomColor: '#47315a',
  borderBottomWidth: 1  }}>
                  <Picker
                    selectedValue={this.state.bloodType}
                    onValueChange={(itemValue, itemIndex) => this.setState({bloodType: itemValue})}
                  >
                    <Picker.Item label="Blood Type" value="" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="AB" value="AB" />
                    <Picker.Item label="O" value="O" />
                  </Picker>
                </View>
              </View>
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
              <View style={[styles.container, {margin: 10}]}>
                <DatePicker
                  style={{width: 200}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2015-05-01"
                  maxDate="2015-06-01"
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
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
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
            <DatePicker birthDate/>
            <DatePicker recentDonateDate/>*/
        );
    }

}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
