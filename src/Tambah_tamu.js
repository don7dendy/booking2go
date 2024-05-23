import React, {Component} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Image,StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

class Tambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      link: '',
      isloading: true,
      fontSizeNormal: 17,
      fontSizeKecil: 14,
      value1: 'MR',
      value2: 'MR',
      value3: 'MR',
      ed1: '',
      name1: '',
      ed2: '',
      name2: '',
      ed3: '',
      name3: '',
      isloading: true,
    };
  }

  async componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      //memanggil data di async storage
      try {
        const value = await AsyncStorage.getItem('tamu');
        if (value !== null) {
          let datajson = JSON.parse(value);
          this.setState({
            isloading: false,
            ed1: datajson.data1,
            ed2: datajson.data2,
            ed3: datajson.data3,
            name1: datajson.name1,
            name2: datajson.name2,
            name3: datajson.name3,
            value1: datajson.stat1,
            value2: datajson.stat2,
            value3: datajson.stat3,

          });
        }
      } catch (error) {
        console.log(error);
      }
    });
    this.setState({
      isloading: false,
    });
  }

  simpan = () => {
    if (
      this.state.ed1 == true &&
      this.state.ed2 == true &&
      this.state.ed3 == true &&
      this.state.name1 != '' &&
      this.state.name2 != '' &&
      this.state.name3 != ''
    ) {
      AsyncStorage.setItem(
        'tamu',
        JSON.stringify({
          data1: '1',
          name1: this.state.name1,
          stat1: this.state.value1,
          data2: '1',
          name2: this.state.name2,
          stat2: this.state.value2,
          data3: '1',
          name3: this.state.name3,
          stat3: this.state.value3
        }),
      );
      this.props.navigation.navigate('Detail');
    } else if (
      this.state.ed1 == true &&
      this.state.ed2 == false &&
      this.state.ed3 == false &&
      this.state.name1 != ''
    ) {
      AsyncStorage.setItem(
        'tamu',
        JSON.stringify({
          data1: '1',
          name1: this.state.name1,
          data2: '',
          name2: '',
          data3: '',
          name3: '',
          stat1: this.state.value1,
          stat2: '',
          stat3: '',
        }),
      );
      this.props.navigation.navigate('Detail');
    } else if (
      this.state.ed1 == true &&
      this.state.ed2 == true &&
      this.state.ed3 == false &&
      this.state.name1 != '' &&
      this.state.name2 != ''
    ) {
      AsyncStorage.setItem(
        'tamu',
        JSON.stringify({
          data1: '1',
          name1: this.state.name1,
          data2: '1',
          name2: this.state.name2,
          data3: '',
          name3: '',
          stat1: this.state.value1,
          stat2: this.state.value2,
          stat3: '',

        }),
      );
      this.props.navigation.navigate('Detail');
    } else if (
      this.state.ed1 == false &&
      this.state.ed2 == true &&
      this.state.ed3 == true &&
      this.state.name2 != '' &&
      this.state.name3 != ''
    ) {
      AsyncStorage.setItem(
        'tamu',
        JSON.stringify({
          data1: '',
          name1: '',
          data2: '1',
          name2: this.state.name2,
          data3: '1',
          name3: this.state.name3,
          stat1: '',
          stat2: this.state.value2,
          stat3: this.state.value3,

        }),
      );
      this.props.navigation.navigate('Detail');
    } else {
      Alert.alert('masukkan nama tamu');
    }
  };

  addtext = () => {
    if (this.state.ed1 == '') {
      this.setState({
        ed1: '1',
      });
    } else if (this.state.ed2 == '') {
      this.setState({
        ed2: '1',
      });
    } else if (this.state.ed3 == '') {
      this.setState({
        ed3: '1',
      });
    } else if (this.state.ed3 == '1') {
      Alert.alert('Jumlah maksimum tamu');
    }
  };

  editText1 = () => {
    if (this.state.ed1 == '1') {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.borderPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.value1}
              onValueChange={TextInputValue =>
                this.setState({value1: TextInputValue})
              }>
              <Picker label="MR" value="MR" />
              <Picker label="MS" value="MS" />
            </Picker>
          </View>
          <View style={styles.editText}>
            <TextInput
              value={this.state.name1}
              onChangeText={TextInputValue =>
                this.setState({name1: TextInputValue})
              } //merubah state name
              style={styles.inputText}
            />
          </View>
          <TouchableOpacity onPress={() => this.delete1()}>
            <Icon name="trash-outline" size={40} color="red" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  editText2 = () => {
    if (this.state.ed2 == '1') {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.borderPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.value2}
              onValueChange={TextInputValue =>
                this.setState({value2: TextInputValue})
              }>
              <Picker.Item label="MR" value="MR" />
              <Picker.Item label="MS" value="MS" />
            </Picker>
          </View>
          <View style={styles.editText}>
            <TextInput
              value={this.state.name2}
              onChangeText={TextInputValue =>
                this.setState({name2: TextInputValue})
              } //merubah state name
              style={styles.inputText}
            />
          </View>
          <TouchableOpacity onPress={() => this.delete2()}>
            <Icon name="trash-outline" size={40} color="red" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  editText3 = () => {
    if (this.state.ed3 == '1') {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.borderPicker}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.value3}
              onValueChange={TextInputValue =>
                this.setState({value3: TextInputValue})
              }>
              <Picker.Item label="MR" value="MR" />
              <Picker.Item label="MS" value="MS" />
            </Picker>
          </View>
          <View
            style={styles.editText}>
              <TextInput
                value={this.state.name3}
                onChangeText={TextInputValue =>
                  this.setState({name3: TextInputValue})
                } //merubah state name
                style={styles.inputText}
              />
          </View>
          <TouchableOpacity onPress={() => this.delete3()}>
            <Icon name="trash-outline" size={40} color="red" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  delete1 = () => {
    if (this.state.ed1 == '1') {
      this.setState({
        ed1: '',
      });
    } else {
      this.setState({
        ed1: '',
      });
    }
  };

  delete2 = () => {
    if (this.state.ed2 == '1') {
      this.setState({
        ed2: '',
      });
    } else {
      this.setState({
        ed2: '',
      });
    }
  };

  delete3 = () => {
    if (this.state.ed3 == '1') {
      this.setState({
        ed3: '',
      });
    } else {
      this.setState({
        ed3: '',
      });
    }
  };

  render() {
    if (this.state.isloading) {
      return (
        <View style={{paddingTop: 200}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Loading...
          </Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
          <View
            style={{
              padding: '5%',
              flex: 1,
              flexDirection: 'column',
              height: '100%',
            }}>
            {/* Data Tamu */}
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#4974a5',
                  paddingBottom: '3%',
                  fontWeight: 'bold',
                }}>
                Data Tamu
              </Text>

              {this.editText1()}
              {this.editText2()}
              {this.editText3()}

              {/* tambah data tamu */}
              <TouchableOpacity
                onPress={() => this.addtext()}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  padding: '5%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: this.state.fontSizeNormal,
                    color: 'orange',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  + Tambah Data Tamu
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* simpan */}
          <View style={{padding: '3%'}}>
            <TouchableOpacity
              onPress={() => this.simpan()}
              style={{
                padding: '3%',
                backgroundColor: 'orange',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontSize: this.state.fontSizeNormal,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Simpan
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }
}

            const styles = StyleSheet.create({
              row : {
                flexDirection:'row',
              },
              editText : {
                borderColor:'gray',
                borderRadius:10, 
                borderWidth:1, 
                marginLeft:'2%', 
                marginRight:'5%', 
                padding:'3%', 
                marginBottom:'4%', 
                width:'55%'
              },
              borderPicker : {
                borderWidth:1,
                borderRadius:10,
                borderColor:'black',
                width:'30%',
                height:'75%',
                backgroundColor:'gray'
              },
              picker : {
                color:'white',
              },
              inputText : {
                color:'#000', 
                width:'100%', 
                borderRadius:10,
                fontSize:15,
                borderColor:'gray'
              },
              dropdown : {
                width: '18%',
                height: '70%',
                borderColor:'black',
                borderRadius:10,
                borderWidth:1,
              },
              selectedTextStyle: {
                fontSize: 16,
                backgroundColor: 'gray',
                color: 'white',
              },
              placeholderStyle: {
                fontWeight:'bold',
                marginLeft: 10,
                fontSize: 16,
                color: 'black',
              },
              itemTextStyle: {
                fontSize: 16,
                // backgroundColor: 'black',
                color: 'white',
              },
          
            });

export default Tambah;