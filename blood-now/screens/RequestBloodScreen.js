import React, { Component } from 'react';
import { ScrollView,
          View,
          Text,
          TextInput,
          Modal,
          TouchableOpacity,
          Button,
          Picker,
          StyleSheet,
        } from 'react-native';
import { Font } from 'expo';
import { StackNavigation } from '@expo/ex-navigation';

//@withNavigation
export default class RequestBloodScreen extends Component {
  static route = {
    navigationBar: {
      title: 'RequestBlood',
    }
  };
  state = {
    name: '',
    patientID: '',

    ConfirmationModalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({ConfirmationModalVisible: visible});
  }
  render() {
    return(
      <ScrollView>
          <Modal
            styles={{ paddingTop: 300 }}
            animationType={"slide"}
            transparent={true}
            visible={this.state.ConfirmationModalVisible}
            >
            <View style={{ flex: 1 , }}>
              <TouchableOpacity style={{ flex: 0.65 }} onPress={()=>{this.setModalVisible(!this.state.ConfirmationModalVisible)}} />
              <View style={{ flex: 0.35, backgroundColor:'white', borderColor:'grey', borderWidth: 1 ,}} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' , alignItems:'flex-start',  }}>
                  <Button title='Cancel' onPress={() => {
                    this.setModalVisible(!this.state.ConfirmationModalVisible)
                  }}/>
                  <Button title='Confirm' onPress={() => {
                    this.setState({bloodType: this.state.bloodTypeTemp});
                    this.setModalVisible(!this.state.ConfirmationModalVisible);
                  }}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'row',  justifyContent: 'space-around'}} >
                  <Picker
                    style={{ flex: 0.3 }}
                    selectedValue={this.state.bloodTypeTemp}
                    onValueChange={(itemValue, itemIndex) => this.setState({bloodTypeTemp: itemValue})}
                  >
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="AB" value="AB" />
                    <Picker.Item label="O" value="O" />
                  </Picker>
                  <Picker
                    style={{ flex: 0.3 }}
                    selectedValue={this.state.bloodTypeTemp}
                    onValueChange={(itemValue, itemIndex) => this.setState({bloodTypeTemp: itemValue})}
                  >
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="AB" value="AB" />
                    <Picker.Item label="O" value="O" />
                  </Picker>
                </View>
            </View>
           </View>
          </Modal>

          <View style={styles.headerContainerStyle}>
            <Text style={styles.headerStyle}>
              คำร้องขอรับบริจาค
            </Text>
          </View>
          <View style={styles.bodyContainerStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="ชื่อผู้ขอรับบริจาค"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>

          <View style={styles.bodyContainerStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="รหัสผู้ป่วย"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>

          <TouchableOpacity
            onPress={() => { this.setModalVisible(true) }}
          >
            <View style={styles.pickerContainer}>
                <Text style={[Font.style('CmPrasanmit'), styles.pickerText]}>{'Blood Type: '+this.state.bloodType}</Text>
              </View>
          </TouchableOpacity>

          <View style={styles.bodyContainerStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="จำนวนเลือดที่ต้องการ(ยูนิต)"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>

          <View style={styles.bodyContainerStyle, {
            alignSelf:'center',

            borderWidth: 1,
            width: '80%',
            height: '30%',}
          }>
            <TextInput
              multiline
              style={styles.bodyMultiLineContainerStyle}
              placeholder="รายละเอียด"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width:270,
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
    backgroundColor: 'white',
  },
  headerContainerStyle: {

  },
  headerStyle: {

  },
  bodyContainerStyle: {
    alignSelf: 'center',
    borderColor: '#EEEDEE',
    borderBottomWidth: 1,
  },
  bodyMultiLineContainerStyle: {
    alignSelf: 'center',
    borderColor: '#EEEDEE',
    borderBottomWidth: 1,
  },
  pickerText:{
    marginTop:10,
    paddingLeft:10,
    fontSize: 23,
  },
  container: {
    alignSelf: 'center',
  },
  pickerContainer: {
    height: 50,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: '#EEEDEE',
    borderWidth: 1
  },
});
