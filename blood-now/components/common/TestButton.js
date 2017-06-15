import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

const TestButton = ({onPress}) => {
  /*onButtonPress = () => {
      //console.logging('props');
      this.navigator.push("requestBlood");
  }*/
  return(
    <TouchableOpacity onPress={onPress} style={styles.containerStyle} >
      <Image
        source={require('../../assets/images/expo-icon@2x.png')}
        fadeDuration={0}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    /*justifyContent: 'center',
    alignItems:'center',
    //width: 100,
    borderWidth: 1*/
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    paddingTop: 1,
  },
  textStyle: {
    fontSize: 18
  }
});

export {TestButton};
