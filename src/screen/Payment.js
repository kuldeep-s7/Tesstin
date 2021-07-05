import React ,{useState} from 'react';
import {Text,StyleSheet,View, Button,TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
// import ModalDropdown from 'react-native-modal-dropdown';


const Payment = ({navigation})=> {
  const[number,setNumber] = useState('');
  const[name,setName] = useState('');

    const Data = async ()=>{
      await   AsyncStorage.setItem("name", name)
      console.log(name)
     await AsyncStorage.setItem("number", number)
      console.log(number)
    }

  const handleSubmit =()=>{
   {  number == "" && name == ""  ? alert("please fill details")
      : Data
      navigation.navigate('Detail') }
  }

    return <View style={{backgroundColor:'white',height:'100%'}}>
        <Text 
        style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop : '1%'}}>Add Credit Card</Text>
        <Text 
         style={{textAlign:'center',fontSize:16,padding:'2%'}}>
            The monkey-rope is found in all whalers,
            but it was only if the monkey and the whale</Text>
          <View 
          style={{marginTop:'10%',borderTopWidth:0.5,flex: 1}}>
              <Text 
              style={{textAlign:'left',fontSize:16
              ,marginLeft:'5%',fontWeight:'bold',marginTop:'5%'}}>
                  Card Number
                  </Text>
            <TextInput
            onChangeText ={(number)=>setNumber(number)}
             keyboardType="number-pad" style ={styles.input}/>
            <Text style={{textAlign:'left',fontSize:16,marginLeft:'5%',
            fontWeight:'bold',marginTop:'5%'}}>
                Card Holder</Text>
            <TextInput 
             onChangeText ={(name)=>setName(name)} 
             style ={styles.input}/>
            
            {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
            <View style={{position:'absolute',bottom: 5,width:'90%',alignSelf:'center'}}>   
                    <TouchableOpacity
                     onPress ={handleSubmit}
                    style={{backgroundColor:'blue',height:40,justifyContent:'center'}}>
               <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:18}}>Add Card</Text>
               </TouchableOpacity>
               </View>

          </View>
    </View>
};

const styles = StyleSheet.create({
   
    input: {
      height: 40,
      marginHorizontal: '5%',
      marginVertical: '2%',
      borderWidth: 0.5,
      borderColor:'grey'
    },
  });

export default Payment;