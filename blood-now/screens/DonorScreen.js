import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { withNavigation, getNavigator } from '@expo/ex-navigation';
import { Countdown, CardList } from '../components/common';

@withNavigation class ExponentButton extends Component {
  _handlePress = () => {
    this.props.navigator.push('manualDonate');
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
          paddingTop: 1,
        }}>
        <Image
          source={require('../assets/icons/exponent-icon.png')}
          style={{ width: 21, height: 17 }}
        />
      </TouchableOpacity>
    );
  }
}

export default class DonorScreen extends Component {
  static route = {
    navigationBar: {
      title: "ให้เลือด"
    }
  }
  state = {
    moreDetailModal: false,
  }

  _onMoreDetailPress() {
    this.setState({moreDetailModal: true})
  }

  render() {
    const date = '6/14/2017';
      return(
          <View >
            <Modal>

            </Modal>


            <Text>Countdown</Text>
            <Countdown recentDonateDate={date} />
            <View style={[styles.requestCardContainer,{backgroundColor: 'rgba(0, 102, 255,0.8)', height: '20%', flexDirection: 'row',  alignItems: 'center'}]}>
              <Image style={styles.requestImageStyle} source={require("../assets/images/logo.png")}/>
              <Text style={styles.requestDetailStyle}>Current Request</Text>
              <TouchableOpacity
                style={styles.requestMoreDetailStyle}
                onPress={() => this._onMoreDetailPress()} >
                <Text> More Detail</Text>
              </TouchableOpacity>
            </View>
            <CardList url={"https://rallycoding.herokuapp.com/api/music_albums"} />

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
  requestImageStyle: {
    marginLeft: 10,
    marginTop: 10,
    height: 50,
    width: 50,
  },
  requestDetailStyle: {
    paddingLeft: 20,
  },
  requestMoreDetailStyle: {

  },
});
