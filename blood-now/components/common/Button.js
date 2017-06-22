import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Font } from 'expo'

const Button = ({title,onPress,buttonColor,sizeFont,ButtonHeight,ButtonWidth}) => {
  return(
    <TouchableOpacity 
      style={[styles.buttonStyle,{backgroundColor: buttonColor,width: ButtonWidth, height: ButtonHeight}]} 
      onPress={onPress}>
      <Text style={[Font.style('CmPrasanmitBold'),{fontSize: sizeFont,color: 'white'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop:10,
    marginBottom:10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

export { Button };