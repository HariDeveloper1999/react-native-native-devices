import {launchCameraAsync} from "expo-image-picker"
import { useState } from "react"
import { View,Button,StyleSheet,Image,Text } from "react-native"
import { Colors } from "../constants/colors";
import OutlineBtn from "./OutlineBtn";


export default function ImagePicker({onTakenImage}){
    const [pickedimage,setPickedImage]=useState();

   const  imageHandler =async () =>{
    const image = await launchCameraAsync({
        allowsEditing:true,
        aspect:[16,20],
        quality:0.5
    })
    setPickedImage(image.assets[0].uri)
    onTakenImage(image.assets[0].uri)
   }

   let imagePreview = <Text>No Image Taken Yet</Text>
   if(pickedimage){
    imagePreview = <Image style={styles.image} source={{uri:pickedimage}}/>
   }
    return(
        <View>
             <View style={styles.imageContainer}>
                {imagePreview}
             </View>
             {/* <Button title="Take Image" onPress={imageHandler}/> */}
             <OutlineBtn
             title="Take Image"
             size={24}
             icon="camera"
             color="yellow"
             onPress={imageHandler}
             
             />

        </View>
    )

}

const styles=StyleSheet.create({
   imageContainer:{
    width:"100%",
    height:200,
    marginVertical:8,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.primary100,
    
   }, 
 
   image:{
    height:"100%",
    width:"100%",
   }
})