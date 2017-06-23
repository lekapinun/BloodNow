import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SlidingTabNavigation } from 'ex-navigation';

export default class InformationScreen extends Component {
    static route = {
      navigationBar: {
        title="ข้อควรรู้เกี่ยวกับการบริจาคโลหิต"
      }
    };

    render() {
        return(
            <View style={{marginTop:30}}>
              <SlidingTabNavigation
                id="sliding-tab-navigation"
                navigatorUID="sliding-tab-navigation"
                initialTab="ขั้นตอน"
                renderLabel={this._renderLabel}
                barBackgrundColor="#000000"
                indicatorStyle={styles.tabIndicator}
              >

                <SlidingTabNavigationItem id="ขั้นตอน">
                  <View />
                </SlidingTabNavigationItem>
              </SlidingTabNavigation>
                <Text>INFORMATION SCREEN</Text>
            </View>
        );
    }

}
