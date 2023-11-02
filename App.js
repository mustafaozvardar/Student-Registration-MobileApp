import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Button } from 'react-native';
import React, { useState,useRef } from 'react';

export default function App() 
{

  const[name,setName]=useState('');
  const[name2,setName2]=useState('');
  const[age,setAge]=useState('');

  const inputRef = useRef(null);

  const inputRef2 = useRef(null);

  const inputRef3 = useRef(null);


  
  
  

  const handlePress=()=>{
      setName(inputRef.current.value);
      setName2(inputRef2.current.value);
      setAge(inputRef3.current.value);
  };

  

  return (
    <View style={styles.container}>


      <Text style={{fontSize:30,color:'red'}}>Öğrenci Kayıt Formu</Text>
      
      
      <StatusBar style="auto" />
      

      <TextInput 
        ref={inputRef}
        style={styles.textinput}
        placeholder='Adınızı girin..'
      />
  


      <TextInput 
        ref={inputRef2}
        style={styles.textinput}
        placeholder='Soyadınızı girin..'
      />

      



<TextInput 
        style={styles.textinput}
        placeholder='Öğrenci no giriniz..'
        ref={inputRef3}
        keyboardType='numeric'
        maxLength={10}
      />



      <Text style={{fontSize:30,marginTop:10}}>Adı: {name}</Text>
      <Text style={{fontSize:30,marginTop:10}}>Soyadı: {name2}</Text>
      <Text style={{fontSize:30,marginTop:10}}>Öğrenci No: {age}</Text>

  






    <TouchableOpacity 
        
        onPress={handlePress}
        style={styles.submitBtn} >

      <Text style={styles.submitBtnTxt}>View</Text>
      </TouchableOpacity>   
      <Text style={styles.txt}>- Mustafa Özvardar</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput:{
    fontSize:20,
    color:'black',
    marginTop:10,
    padding:4,
    borderWidth:2,
    borderRadius:7,
    borderColor:'black'
  },

  submitBtn:{
    backgroundColor:'#395B64',
    padding:10,
    borderRadius:15,
    justifyContent:'center',
    marginTop:10,
  
  },

  submitBtnTxt:{
    color:'#fff',
    textAlign:'center',
    fontSize:20,
  },

  txt:{
    marginTop:50,
  }


});
