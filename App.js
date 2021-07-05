import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavStack from './src/Stack/NavStack';
import Detail from './src/screen/Detail';
import Payment from './src/screen/Payment';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Header = ()=>{
  return (
    <View style={{flexDirection :'row'}}>
      <Text style={{fontFamily :'lato',fontWeight :'bold',fontSize :25,color :'#696969'}}>pay</Text>
      <Text  style={{fontFamily :'lato',fontWeight :'200',fontSize :25,color :'black'}}>m</Text>
      <Text  style={{fontFamily :'lato',fontWeight :'bold',fontSize :25,color :'#C0C0C0'}}>ent</Text>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: <Header/> ,
        headerTitleStyle : {alignSelf :'center'}}}
        />
         <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: <Header/> ,
        headerTitleStyle : {alignSelf :'center'}}}
        />
       
        </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
