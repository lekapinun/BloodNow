import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  WebView,
  Image,
  StyleSheet
} from 'react-native';
import { getBackButtonManager } from '@expo/ex-navigation';

import {
    Font
} from 'expo';

export default class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
    };

    render() {
        return(
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', backgroundColor: '#FAFAFA'}}>
                <View>
                    <Image
<<<<<<< HEAD

=======
                        source={require('../assets/icons/logo.png')}
                        style={{width:250,height:120}}
>>>>>>> 6c02c01e0c6de84a23354b5cf2ef74282ff17fc4
                    />
                </View>
                <View style={{marginBottom:50,marginLeft:10}}>
                    <Text style={[Font.style('CmPrasanmit'), { fontSize: 30,color:'#95989A',letterSpacing:8}]}>มากกว่าการให้เลือด</Text>
                </View>
                <View>
                    <TextInput
                        style={[Font.style('CmPrasanmit'),styles.input]}
                        autoCorrect={false}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="ชื่อผู้ใช้หรือเบอร์โทรศัพท์"
                    />
                    <TextInput
                        style={[Font.style('CmPrasanmit'),styles.input]}
                        autoCorrect={false}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="รหัสผ่าน"
                    />
                    <View style={{height: 50, width:270,marginTop:10,justifyContent: 'flex-start',alignItems: 'flex-end'}}>
                        <TouchableOpacity>
                            <Text style={[Font.style('CmPrasanmit'),{ fontSize: 20,color:'#95989A',}]}>ลืมรหัสผ่าน?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
<<<<<<< HEAD
                <View style={{marginTop:30,backgroundColor: '#EF685E'}}>
                    <Button title="เข้าสู่ระบบ" onPress={this._loginSuccess} color="white" />
                </View>
                <View style={{marginTop:30,backgroundColor: '#EF685E'}}>
                    <Button title="ลงทะเบียน" onPress={this._register} color="white" />
=======
                <View style={{marginTop:10,backgroundColor: '#EF685E',height: 50, width:270,marginBottom:10,flexDirection: 'column',justifyContent: 'center' }}>
                    <Button style={[Font.style('CmPrasanmit')]} title="เข้าสู่ระบบ" onPress={this._loginSuccess} color="white" />   
                </View>
                <Text style={[Font.style('CmPrasanmit'),{ fontSize: 20,color:'#95989A'}]}>หรือ</Text>
                <View style={{backgroundColor: '#9FAC9B',height: 50, width:270,marginTop:10,flexDirection: 'column',justifyContent: 'center'}}>
                    <Button style={[Font.style('CmPrasanmit')]} title="ลงทะเบียน" onPress={this._register} color="white" />    
>>>>>>> 6c02c01e0c6de84a23354b5cf2ef74282ff17fc4
                </View>
            </View>
        );
    }

    _loginSuccess = () => {

        /*console.log(this.state);
        this.setState({
            email: '',
            password: '',
        });
        fetch('http://localhost:8000/login')
        .then((response) => {
            console.log(response);
        })*/
        /*.then((responseJson) => {
            console.log(responseJson.movies);
        })*/
        /*.catch((error) => {
            console.error(error);
        });*/
<<<<<<< HEAD
        this.backButtonManager = getBackButtonManager();
        this.backButtonManager.disable();
        this.props.navigator.replace("rootNavigation");
        /*this.setState({
            email: '',
            password: '',
        });
        const myRequest = new Request(
=======
        this.props.navigator.push("rootNavigation");
        /*this.setState({
            email: '',
            password: '',
        });*/
        /*const myRequest = new Request(
>>>>>>> 6c02c01e0c6de84a23354b5cf2ef74282ff17fc4
            'http://localhost:5555/users',
            {
                method: 'POST',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            });
        console.log(JSON.stringify(this.state));
        fetch(myRequest)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });*/
    };

    _register = () => {
        //this.props.navigator.push("register");
        const myRequest = new Request('http://localhost:5555/check');
        fetch(myRequest)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
        })
        .catch((error) => {
            console.warn(error);
        });
    };
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