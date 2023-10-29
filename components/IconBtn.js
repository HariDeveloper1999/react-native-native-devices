import {Ionicons} from "@expo/vector-icons"
import { Pressable } from "react-native"
export default function IconBtn({icon,size,color,onPress}){
    return(
        <Pressable onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    )
} 