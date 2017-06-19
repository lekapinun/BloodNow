import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker,
  StyleSheet,
  DatePickerIOS,
  DatePickerAndroid,
  Button
} from 'react-native';
import { Font } from 'expo';

export default class RegisterScreen extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        bloodType: '',
        phoneNumber: '',
        email: '',
        //province: '',
        date: '',
        recentDonateDate: '',
    }
    onRegisterPress = () => {

    }
    render() {
        return(
            <ScrollView style={{marginTop:30}}>
                <Text>REGISTER SCREEN</Text>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    placeholder="ชื่อผู้ใช้์"
                />
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder="รหัสผ่าน"
                />
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
                    value={this.state.passwordConfirmation}
                    placeholder="ยืนยันรหัสผ่าน"
                />
                <Picker
                  mode="dropdown" onValueChange={(itemValue, itemLabel) => this.setState({bloodType: itemValue})}>
                  <Picker.Item label="A" value="A" />
                  <Picker.Item label="B" value="B" />
                  <Picker.Item label="AB" value="AB" />
                  <Picker.Item label="O" value="O" />
                </Picker>
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                    value={this.state.phoneNumber}
                    placeholder="เบอร์โทรศัพท์"
                />
                <TextInput
                    style={[Font.style('CmPrasanmit'),styles.input]}
                    autoCorrect={false}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="อีเมล์"
                />
                <DatePickerIOS
                  date={new Date(this.state.date)}
                  mode="date"
                  onDateChange={this.onDateChange}
                />
                <Button
                  title="ลงทะเบียน"
                  onPress={() => this.onRegisterPress}
                />
            </ScrollView>

            /*<Picker>
              Province
            </Picker>
            <DatePickerAndroid
              mode="calendar"
            />
            <DatePicker birthDate/>
            <DatePicker recentDonateDate/>
            */
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
});
