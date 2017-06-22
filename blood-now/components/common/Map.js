import React from 'react';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';

export class Map extends React.Component {
  state = {
    region: {
      latitude: 18.792636,
      longitude:  98.953058,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    x: {
      latitude: 18.792636,
      longitude:  98.953058,
    }
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        style={{height: 200, width: 200, alignSelf: 'center' }}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
      >
        <MapView.Marker draggable
          title="TESTTitle"
          description="test descriptionp"
          coordinate={this.state.x}
          onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
        />
      </MapView>
    );
  }
}
