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
  Button,
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

    async DatePickerAndroid() {
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          date: new Date(2020, 4, 25)
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // Selected year, month (0-11), day
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
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
                <DatePickerAndroid />
                <Button
                  title="ลงทะเบียน"
                  onPress={() => this.onRegisterPress}
                />
            </ScrollView>

            /*<Picker>
              Province
            </Picker>

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
