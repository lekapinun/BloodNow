import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { Font } from 'expo'
import { RegisterTitle } from './RegisterTitle'

const RegisterInput = ({label,secureTextEntry,onChangeText,value,keyboardType,maxLength,placeholder,validate}) => {
let vali
if(validate === '01' ) { vali = <View style={{width:35,height:30}}><Image source={require('../../assets/icons/ex.png')} style={{width:25,height:25}}/></View> }
else{ vali = <View style={{width:35,height:30}}/>} 
  return(
    <View style={styles.underline}> 
      <RegisterTitle>{label}</RegisterTitle>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[Font.style('CmPrasanmit'),styles.input]}
          autoCorrect={false}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize='none'
          maxLength={maxLength}
          placeholder={placeholder}
        />
        {vali}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  underline : {
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  input: {
    height: 30,
    width: 275,
    paddingLeft:10,
    fontSize: 25,
    backgroundColor: 'transparent',
  },
});

export { RegisterInput };