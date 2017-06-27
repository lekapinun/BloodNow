import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Font } from 'expo'
import { RegisterTitle } from './RegisterTitle'

const RegisterInput = ({label,secureTextEntry,onChangeText,value,keyboardType,maxLength,placeholder}) => {
  return(
    <View style={styles.underline}> 
      <RegisterTitle>{label}</RegisterTitle>
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
    width: 310,
    paddingLeft:10,
    fontSize: 25,
    backgroundColor: 'transparent',
  },
});

export { RegisterInput };