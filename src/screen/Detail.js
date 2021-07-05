import React ,{useState,useEffect}from 'react';
import {Text,StyleSheet,View, Button, AsyncStorage} from 'react-native';


const Detail = ()=> {
    useEffect(() => {
        const storage = async()=>{
       setName(await AsyncStorage.getItem("name"));
         setNumber(await AsyncStorage.getItem("number"));
     
        }
        storage()
      }, []);
      
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    return <View style={{height:'100%',backgroundColor:'white'}}>
            <Text style={{fontSize:20,fontWeight:'bold',margin:10}}>My personal card</Text>
         <Text style={{fontSize:16,fontWeight:'bold',margin:10}}>Card number</Text>
          <Text style={{fontSize:16,fontWeight:'bold',margin:5}}> {number}</Text>
          <Text style={{fontSize:16,fontWeight:'bold',margin:10}}>Card holder name</Text>
         
          <Text style={{fontSize:16,fontWeight:'bold',margin:5}}> {name}</Text>
    </View>
};

export default Detail;