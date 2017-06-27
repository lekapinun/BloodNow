import React from 'react';
import { Linking } from 'react-native';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';

export class Map extends React.Component {
  state = {
    region: {
      latitude: this.props.marker.latitude, // 18.792636,
      longitude: this.props.marker.longitude, // 98.953058,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    x: {
      latitude: 18.792636,
      longitude:  98.953058,
    }
  };

  onRegionChange(region) {
    console.log(this.props);
    this.setState({ region });
  }

  render() {
    const url="http://maps.google.com/maps?daddr=("+ this.state.region.latitude + "," + this.state.region.longitude + ")";
    return (
      <MapView
        style={{height: 200, width: 200, alignSelf: 'center' }}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
        onPress={() => Linking.openURL(url)}
      >
        <MapView.Marker
          title="TESTTitle"
          description="test descriptionp"
          coordinate={this.state.region}
        />
      </MapView>
    );
  }
}
