import React from 'react';
import {Text,StyleSheet,View,Image, Button} from 'react-native';
import Detail from '../screen/Detail';
import Home from '../screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddImage from '../Component/AddImage';

const Tab = createBottomTabNavigator();
const NavStack = ()=> {
    return (
     
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarLabel :'',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? <Image source= {require('../Assets/home-fill.png')}/>
                : <Image source= {require('../Assets/home-line.png')}/>;
            } else if (route.name === 'Detail') {
              iconName = focused 
              ? <Image source= {require('../Assets/information-fill.png')}/>
               : <Image source= {require('../Assets/information-line.png')}/>;
            }else {
              iconName = focused
              ?   <View style={{width : 40,height : 40,borderRadius : 100,borderColor: 'lightgrey',borderWidth : 1,padding : 25,justifyContent:'center',backgroundColor:'white',marginBottom:25}}>
              <Image source={require('../Assets/add-line.png')} style={{height: 30,width: 30,alignSelf :'center',}} />
        </View>
              :   <View style={{width : 40,height : 40,borderRadius : 100,borderColor: 'lightgrey',borderWidth : 1,padding : 25,justifyContent:'center',backgroundColor:'white',marginBottom:25}}>
              <Image source={require('../Assets/add-line.png')} style={{height: 30,width: 30,alignSelf :'center',}} />
        </View>
            }

            // You can return any component that you like here!
            return <View>{iconName}</View>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddImage" component={AddImage} />
        <Tab.Screen name="Detail" component={Detail} />
        
      </Tab.Navigator>
   
    )
};

export default NavStack;
