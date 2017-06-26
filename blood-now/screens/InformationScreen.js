import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList,
} from 'react-native';

export default class InformationScreen extends Component {
    static route = {
      navigationBar: {
        title: "ข้อควรรู้เกี่ยวกับการบริจาคโลหิต"
      }
    };

    render() {
        return(
            <View style={{marginTop:30}}>
                <Text>INFORMATION SCREEN</Text>
                <SectionList>

                </SectionList>
            </View>
        );
    }

}

/*
overlap image
<TouchableOpacity >
  <Image style={{ width: 80, height: 80, justifyContent: 'flex-end', alignItems: 'flex-end'}}  source={require('../assets/icons/notification-icon.png')}>
    <Image style={{ width: 30, height: 30,}}  source={require('../assets/icons/app-icon.png')}/>
  </Image>
</TouchableOpacity>
*/
