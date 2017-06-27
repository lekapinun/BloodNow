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
import { Map } from '../components/common';

export default class RequestBloodScreen extends Component {
  static route = {
    navigationBar: {
    }
  };
  state = {
    name: '',
    patientID: '',
    bloodType: '',
    bloodUnit: '',
    description: '',
    hostpital: '',
    bloodTypeModalVisible: false,
    ConfirmationModalVisible: false,
    confirm: false,
  }
  setBloodTypeModalVisible(visible) {
    this.setState({bloodTypeModalVisible: visible});
  }
  setConfrimationModalVisible(visible) {
    this.setState({ConfirmationModalVisible: visible});
  }
  render() {
    return(
      <ScrollView style={{ }}>
          <Modal
            styles={{ paddingTop: 300 }}
            animationType={"slide"}
            transparent={true}
            visible={this.state.bloodTypeModalVisible}
            >
            <View style={{ flex: 1 , }}>
              <TouchableOpacity style={{ flex: 0.65 }} onPress={()=>{this.setModalVisible(!this.state.ConfirmationModalVisible)}} />
              <View style={{ flex: 0.35, backgroundColor:'white', borderColor:'grey', borderWidth: 1 ,}} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' , alignItems:'flex-start',  }}>
                  <Button title='Cancel' onPress={() => {
                    this.setBloodTypeModalVisible(!this.state.bloodTypeModalVisible)
                  }}/>
                  <Button title='Confirm' onPress={() => {
                    this.setState({bloodType: this.state.bloodTypeTemp});
                    this.setBloodTypeModalVisible(!this.state.bloodTypeModalVisible);
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


          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.ConfirmationModalVisible}
          >
            <View
              style={{backgroundColor:'rgba(131, 145, 146,0.7)', flex:1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor:'white',flexDirection: 'column', justifyContent: 'space-between', }}>
              <View style={{ paddingTop: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"ชื่อผู้ป่วย"}</Text>
                  <Text>{this.state.name}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"รหัสผู้ป่วย"}</Text>
                  <Text>{this.state.patientID}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"กรุ๊ปเลือด "}</Text>
                  <Text>{this.state.bloodType}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"จำนวน(ยูนิต)"}</Text>
                  <Text>{this.state.bloodUnit}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"รายละเอียด"}</Text>
                  <Text>{this.state.description}</Text>
                </View><View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start'}}>
                  <Text>{"สถานพยาบาล"}</Text>
                  <Text>{this.state.hostpital}</Text>
                </View>
              </View>

              <View>
                <Map marker={{
                  //ขอlat, long จากระบบ
                  latitude: 18.788488,
                  longitude: 98.971420,}}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around' , alignItems:'flex-start', borderColor: 'black', borderWidth: 1}}>
                <Button title='Cancel' onPress={() => {
                  this.setConfrimationModalVisible(!this.state.ConfirmationModalVisible)
                }}/>
                <Button title='Confirm' onPress={() => {
                  this.setState({confirm: this.state.bloodTypeTemp});
                  this.setConfrimationModalVisible(!this.state.ConfirmationModalVisible)
                }}/>
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
              style={[Font.style('CmPrasanmit'),styles.inputStyle]}
              placeholder="ชื่อผู้ขอรับบริจาค"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>

          <View style={styles.bodyContainerStyle}>
            <TextInput
              style={[Font.style('CmPrasanmit'),styles.inputStyle]}
              placeholder="รหัสผู้ป่วย"
              onChangeText={(patientID) => this.setState({patientID})}
              value={this.state.patientID}
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
              style={[Font.style('CmPrasanmit'),styles.inputStyle]}
              placeholder="จำนวนเลือดที่ต้องการ(ยูนิต)"
              keyboardType= "numeric"
              onChangeText={(bloodUnit) => this.setState({bloodUnit})}
              value={this.state.bloodUnit}
            />
          </View>
          <TextInput
            multiline
            style={[Font.style('CmPrasanmit'),styles.bodyMultiLineContainerStyle]}
            placeholder="รายละเอียด"
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
          />

          <View style={styles.bodyContainerStyle}>
            <TextInput
              style={[Font.style('CmPrasanmit'),styles.inputStyle]}
              placeholder="สถานพยาบาล"
              onChangeText={(hostpital) => this.setState({hostpital})}
              value={this.state.hostpital}
            />
          </View>


          <Button  title="ขอรับบริจาคเลือด" onPress={() => {this.setConfrimationModalVisible(true)}} />
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
    margin: 10,
  },
  bodyMultiLineContainerStyle: {
    borderColor: '#EEEDEE',
    borderWidth: 1,
    alignSelf: 'center',
    width: 300,
    height: 150,
    padding: 10,
    fontSize: 23,
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
