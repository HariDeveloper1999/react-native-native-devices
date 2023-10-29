import { Pressable,Text,StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { Colors } from "../constants/colors";

export default function OutlineBtn({title,size,color,icon,onPress}){
    return(
        <Pressable onPress={onPress} style={(pressed)=>[styles.btn,pressed&&styles.pressed]}>
            <Ionicons name={icon} size={size} color={color}/>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}


const styles=StyleSheet.create({
    btn:{
        borderWidth:2,
        borderColor:Colors.primary500,
         alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        padding:10,
        borderRadius:10

    },
    pressed:{
        opacity:0.7
    },
    text:{
        fontSize:18,
        color:"yellow",
        marginHorizontal:5

    }
})