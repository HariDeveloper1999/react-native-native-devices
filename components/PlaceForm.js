import { useState } from "react";
import { View, Text, ScrollView,StyleSheet,TextInput,Alert } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { Button } from "react-native";
import { Place } from "../models/Place";
import { insertPlace } from "../util/database";



export default function PlaceForm({onCreatePlace}) {
    const [enteredVal,setEnteredVal]=useState('')
    const [address,setAddress]=useState('');
    const [selectedImage,setSelectedImage]=useState()
    const inputhandler=(enteredText)=>{
       setEnteredVal(enteredText)
    }
    const addressHandler=(enteredText)=>{
      setAddress(enteredText)
   }
   const imageSaver=(imageUri)=>{
    setSelectedImage(imageUri)

   }
   const submitHandler=async()=>{
    // console.log("data",selectedImage,enteredVal,address)
    if(enteredVal&&selectedImage&&address){
    const placeData = new Place(enteredVal,selectedImage,address);
    

    onCreatePlace(placeData)
    }
    else{
      Alert.alert(
        "Please provide proper data",
        "You did n't entered correct data"
      )
    }

   }
  return (
    <ScrollView style={styles.form}>
      <View >
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={inputhandler} value={enteredVal}/>
      </View>
    
      <View style={{marginTop:10}}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} onChangeText={addressHandler} value={address}/>
      </View>

      <ImagePicker onTakenImage={imageSaver}/>
      <View style={{marginTop:20}}>
        <Button title="Submit" onPress={submitHandler} color="gray"/>
      </View>
      
      {/* <LocationPicker/> */}
    </ScrollView>
  );
}

const styles=StyleSheet.create({
    form:{
        flex:1,
        padding:24
    },
    label:{
        fontWeight:"bold",
        marginBottom:4,
        color:Colors.primary500

    },
    input:{
        marginVertical:8,
        paddingVertical:8,
        paddingHorizontal:4,
        fontSize:16,
        borderBottomColor:Colors.primary700,
        borderBottomWidth:2,
        backgroundColor:Colors.primary100,
        

    }
})
