import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Countdown } from '../components/common';

export default class DonorScreen extends Component {
  static route = {
    navigationBar: {
      title: "ให้เลือด"
    }
  }
    render() {
      const date = '3/14/2017';
        return(
            <View >
                <Text>Countdown</Text>
                <Countdown recentDonateDate={date} />
                <View style={[styles.requestCardContainer,{backgroundColor: 'rgba(0, 102, 255,0.8)', height: '20%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}]}>
                  <Image style={styles.imageRequestStyle} source={require("../assets/images/logo.png")}/>
                  <Text style={styles.detailRequestStyle}>Current Request</Text>
                </View>
                <ScrollView style={[styles.requestCardContainer,{backgroundColor: 'rgba(92, 92, 61,0.8)', height: '40%'}]}>
                  <View style={{  flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Image style={styles.imageRequestStyle} source={require("../assets/images/expo-icon.png")}/>
                    <Text style={[styles.detailRequestStyle]}>History</Text>
                  </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  requestCardContainer: {
    marginTop:15,
    alignSelf: 'center',
    width: '90%',
  },
  imageRequestStyle: {
    height: 50,
    width: 50,
  },
  detailRequestStyle: {
  },
});
