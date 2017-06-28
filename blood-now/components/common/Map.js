import React from 'react';
import { Linking, Image, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';

export class Map extends React.Component {
  state = {
    region: {
      latitude: 18.792636,
      longitude: 98.953058,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  onRegionChange(region) {
    console.log(this.props);
    this.setState({ region });
  }

  render() {
    const url="http://maps.google.com/maps?daddr=("+ this.state.region.latitude + "," + this.state.region.longitude + ")";
    return (
      <MapView
        style={{height: 250, width: 300, alignSelf: 'center' }}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
        onPress={() => Linking.openURL(url)}
      >
        <View pointerEvents="none" style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}}>
          <Image style={{width:50, height: 50, rotate: 180,}} pointerEvents="none" source={require('../../assets/icons/exponent-icon.png')}/>
        </View>
      </MapView>
    );
  }

}
/*  Marker with animation
<MapView.Marker
  title="TEST"
  description="test descriptionp"
  coordinate={this.state.region}
/>
*/
