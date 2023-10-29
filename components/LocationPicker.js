import OutlineBtn from "./OutlineBtn";
import { View,StyleSheet,Alert } from "react-native";
import { Colors } from "../constants/colors";
import {getCurrentPositionAsync,useForegroundPermissions,PermissionStatus} from "expo-location"

export default function LocationPicker(){
    const [locationPermissionInformation,requestPermission]=useForegroundPermissions()
   
    const verifyPermission =async()=>{
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse= await requestPermission()
            return permissionResponse.granted
        }
        if(locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                "Insufficient Permissions",
                "You need to grant location permission to use this app"
            );
            return false;
            
        }
        return true;
        
    }
  
    const getLocationHandler=async()=>{
        const hasPermission=await verifyPermission()

        if(!hasPermission){
            return
        }
        const location=await getCurrentPositionAsync()
        console.log("loc",location)

    }
    const picMapHandler=()=>{

    }

    return(
        <View>
            <View style={styles.locationContainer}></View>
            <View style={styles.btnContainer}>
                <OutlineBtn icon="location" title="Location" size={24} color="yellow" onPress={getLocationHandler}/>
                <OutlineBtn icon="map" size={24} title="Pic on Map" color="yellow" onPress={picMapHandler}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    locationContainer:{
        width:"100%",
        height:200,
        marginVertical:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary100,
        marginVertical:20
       }, 
    btnContainer:{
        flexDirection:'row',
        justifyContent:"space-around"
    }
})