import { Pressable ,View,StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons"

export default function IconButton({name,size,color,pressHandler}){
    return(
        <Pressable onPress={pressHandler} style={({pressed})=> pressed && styles.pressed}>
            <View style={styles.iconContainer}>
                <Ionicons name={name} size={size} color={color}/>
            </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    iconContainer:{
        borderRadius:20,
        padding:6,
        marginVertical:4,
        marginHorizontal:8,

    },
    pressed:{
        opacity:0.75
    }
})