import React, {Component} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Image,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/Ionicons';



class Detail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        link: '',
        isloading: true,
        fontSizeNormal :17 ,
        fontSizeKecil :14 ,
        value: 0,
        tamu1: '',
        tamu2: '',
        tamu3: '',
        name1: '',
        name2: '',
        name3: '',
        stat1: '',
        stat2: '',
        stat3: '',
        isloading: true,
        namaHotel: '',
        room: '',
        checkIn: '',
        checkOut: '',
        breakfast: '',
      };
      }

      async componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', async() => {
      //memanggil data token di async storage
        try {
          const value = await AsyncStorage.getItem('tamu');
          if (value !== null) {
            let datajson = JSON.parse(value);
            console.log('data',datajson);
            this.setState({
              tamu1: datajson.data1,
              tamu2: datajson.data2,
              tamu3: datajson.data3,
              name1: datajson.name1,
              name2: datajson.name2,
              name3: datajson.name3,
              stat1: datajson.stat1,
              stat2: datajson.stat2,
              stat3: datajson.stat3,

            });
          } 
          } catch (error) { 
            console.log(error);
          } 
          fetch ('https://parseapi.back4app.com/classes/hotel/bVonXoSUHK',{              //memuat metode API yang digunakan
          method : 'GET',                                                            
      headers : {
        'X-Parse-Application-Id' : 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
        'X-Parse-REST-API-Key' : '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy'
      },
          }).then((response)=> response.json())
          .then((responseJson)=>{
             this.setState({
              isloading: false,
               namaHotel : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail.hotel_name,
               room : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room.room_name,
               breakfast : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room.meal,
               checkIn : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_in,
               checkOut : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_out,
             })
             console.log('API',this.state.room);
          }).catch((error)=>{
           console.log(error);
          });
        }); 
        //memanggil data token di async storage
        try {
          const value = await AsyncStorage.getItem('tamu');
          if (value !== null) {
            let datajson = JSON.parse(value);
            console.log('data',datajson);
            this.setState({
              tamu1: datajson.data1,
              tamu2: datajson.data2,
              tamu3: datajson.data3,
              name1: datajson.name1,
              name2: datajson.name2,
              name3: datajson.name3,
              stat1: datajson.stat1,
              stat2: datajson.stat2,
              stat3: datajson.stat3,

            });
          } 
          } catch (error) { 
            console.log(error);
          } 
          fetch ('https://parseapi.back4app.com/classes/hotel/bVonXoSUHK',{              //memuat metode API yang digunakan
          method : 'GET',                                                            
      headers : {
        'X-Parse-Application-Id' : 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
        'X-Parse-REST-API-Key' : '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy'
      },
          }).then((response)=> response.json())
          .then((responseJson)=>{
             this.setState({
              isloading: false,
               namaHotel : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail.hotel_name,
               room : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room.room_name,
               breakfast : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room.meal,
               checkIn : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_in,
               checkOut : responseJson.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_out,
             })
             console.log('API',this.state.room);
          }).catch((error)=>{
           console.log(error);
          });
      }

      nextPage = () => {
        this.props.navigation.navigate('Tambah');
      };

      data1 =()=>{
        if (this.state.tamu1 == '1') {
          return (
            <View style={{borderColor:'gray',borderRadius:10, borderWidth:1, marginLeft:'5%', marginRight:'5%', padding:'3%', marginBottom:'4%'}}>
            <View style={{flex:1, flexDirection:'row'}}>
            <Icon name="person-circle" size={30} color="black" style={{paddingRight:'5%'}}/>
            <Text style={{fontSize:this.state.fontSizeNormal,color:'black',fontWeight:'bold'}}>{this.state.stat1}. {this.state.name1}</Text>
            </View>
          </View>
          )
        } else {
          return null;
        }
      }

      data2 =()=>{
        if (this.state.tamu2 == '1') {
          return (
            <View style={{borderColor:'gray',borderRadius:10, borderWidth:1, marginLeft:'5%', marginRight:'5%', padding:'3%', marginBottom:'4%'}}>
            <View style={{flex:1, flexDirection:'row'}}>
            <Icon name="person-circle" size={30} color="black" style={{paddingRight:'5%'}}/>
            <Text style={{fontSize:this.state.fontSizeNormal,color:'black',fontWeight:'bold'}}>{this.state.stat2}. {this.state.name2}</Text>
            </View>
          </View>
          )
        } else {
          return null;
        }
      }

      data3 =()=>{
        if (this.state.tamu3 == '1') {
          return (
            <View style={{borderColor:'gray',borderRadius:10, borderWidth:1, marginLeft:'5%', marginRight:'5%', padding:'3%', marginBottom:'4%'}}>
            <View style={{flex:1, flexDirection:'row'}}>
            <Icon name="person-circle" size={30} color="black" style={{paddingRight:'5%'}}/>
            <Text style={{fontSize:this.state.fontSizeNormal,color:'black',fontWeight:'bold'}}>{this.state.stat3}. {this.state.name3}</Text>
            </View>
          </View>
          )
        } else {
          return null;
        }
      }
      
      

    render() {
      var radio_props = [
        {label: 'Saya memesan untuk diri sendiri', value: 0 },
        {label: 'Saya memesan untuk orang lain', value: 1 }
      ];
                    if (this.state.isloading){
                        return (
                          <View style={{paddingTop: 200}}>
                          <Text style={{textAlign: 'center', fontSize : 20, fontWeight:'bold', color:'#000' }}>Loading...</Text>
                          </View>
                        )
                      } else {
                    return (
                        <ScrollView>
                    <View style={{padding:10}}>

                      {/* header */}
                      <View style={{paddingLeft:'30%', alignItems:'center'}}>
                      <ScrollView horizontal={true} >
                        <View style={{backgroundColor:'#4974a5',width:'7%',borderRadius:10,height:'80%',alignItems:'center',marginRight:10}}>
                          <Text style={{fontSize:12}}>1</Text>
                        </View>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'#000',paddingRight:10}}>Detail Pesanan</Text>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'#000',paddingRight:10}}> --- </Text>
                        <View style={{backgroundColor:'#4974a5',width:'7%',borderRadius:10,height:'80%',alignItems:'center',marginRight:10,opacity:0.5}}>
                          <Text style={{fontSize:12}}>2</Text>
                        </View>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'#000', opacity:0.3}}>Pembayaran</Text>
                      </ScrollView>
                      </View>

                      {/* underlined */}
                      <View style={{borderBottomColor:'#000',borderBottomWidth: StyleSheet.hairlineWidth, paddingTop:'4%'}}/>

                      {/* Detail Pesanan */}
                      <View>
                      <Text style={{fontSize:20,color:'#000',paddingTop:'5%', paddingBottom:'3%',fontWeight:'bold'}}>Detail Pesanan</Text>

                      {/* Card Detail Pesanan */}
                      <View style={{borderColor:'gray',borderRadius:10, borderWidth:1, marginLeft:'5%', marginRight:'5%', padding:'3%',flex:1, flexDirection:'row'}}>
                      <View>
                        <Image source={{uri:'https://hotelimages.sunhotels.net/HotelInfo/hotelImage.aspx?id=11463973&full=1'}} style={{width:70,height:"100%", borderRadius:15, paddingRight:'25%'}} />
                        </View>
                        <View>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'#4974a5'}}>{this.state.namaHotel}</Text>
                        <Text style={{fontSize:this.state.fontSizeKecil,color:'gray', width:'70%'}}>{this.state.room} - {this.state.breakfast}</Text>
                        </View>
                      </View>
                      </View>

                      {/* check in */}
                      <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', paddingTop:'3%'}}>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'black',fontWeight:'bold'}}>Check In</Text>
                        <Text style={{fontSize:this.state.fontSizeKecil,color:'gray'}}>{this.state.checkIn}</Text>
                      </View>

                       {/* check out */}
                       <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', paddingTop:'3%'}}>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'black',fontWeight:'bold'}}>Check Out</Text>
                        <Text style={{fontSize:this.state.fontSizeKecil,color:'gray'}}>{this.state.checkOut}</Text>
                      </View>

                      {/* dapat refund */}
                      <View style={{flex:1,flexDirection:'row', paddingTop:'3%', justifyContent:'flex-end'}}>
                      <Icon name="sync-outline" size={25} color="orange" style={{paddingRight:'5%'}}/>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'orange',fontWeight:'bold'}}>Dapat refund jika dibatalkan</Text>
                      </View>
                      
                      {/* underlined */}
                      <View style={{borderBottomColor:'#000',borderBottomWidth: StyleSheet.hairlineWidth, paddingTop:'4%'}}/>

                      {/* Detail Pemesan */}
                      <View>
                      <Text style={{fontSize:20,color:'#000',paddingTop:'5%', paddingBottom:'3%',fontWeight:'bold'}}>Detail Pemesan</Text>

                      {/* Card Detail Pemesan */}
                      <View style={{borderColor:'gray',borderRadius:10, borderWidth:1, marginLeft:'5%', marginRight:'5%', padding:'3%'}}>
                        <View>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'black',fontWeight:'bold'}}>Tn. Andreas Andreas</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontSize:this.state.fontSizeKecil,color:'gray'}}>andreasandreas@gmail.com</Text>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'#4974a5',textDecorationLine:'underline'}}>Ubah</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:this.state.fontSizeKecil,color:'gray'}}>+628 22 2222 2222</Text>
                        </View>
                      </View>
                      </View>

                      {/* Radio Button */}
                      <View style={{padding:'5%'}}>
                        <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => {this.setState({value:value})}}
                        />
                        </View>

                        {/* Data Tamu */}
                      <View>
                      <Text style={{fontSize:20,color:'#000', paddingBottom:'3%',fontWeight:'bold'}}>Data Tamu</Text>

                      {this.data1()}
                      {this.data2()}
                      {this.data3()}

                      </View>

                      {/* ubah data tamu */}
                      <TouchableOpacity onPress={() => this.nextPage()} style={{flex:1,flexDirection:'row', padding:'8%', justifyContent:'flex-end'}}>
                        <Text style={{fontSize:this.state.fontSizeNormal,color:'#4974a5',fontWeight:'bold',textDecorationLine:'underline'}}>Ubah Data Tamu</Text>
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
            });

export default Detail;