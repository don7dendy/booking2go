import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/Payment_Details';
import Tambah from './src/Tambah_tamu';
// import Detail from './pages/detail';

const Stack = createNativeStackNavigator();

export default class NavIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Detail"
          >
          <Stack.Screen
            name="Detail"
            component={Detail}
            option={{
              title:"Payment Details",
              headerStyle:{
                backgroundColor: "#4974a5"
              }
            }}
          />
          <Stack.Screen
            name="Tambah"
            component={Tambah}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
