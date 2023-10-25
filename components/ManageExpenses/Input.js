import { View,TextInput,Text,StyleSheet } from "react-native";
import {GlobalStyles} from"../../constants/Style"

export default function Input({label,textInputConfigue,style}){
    const inputStyles=[styles.inputText]

    if(textInputConfigue && textInputConfigue.multiline){
        inputStyles.push(styles.multiInput)
    }

    return(
        <View style={[styles.inputContainer,style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfigue}/>
        </View>
    )
}

const styles=StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:6
    },
    label:{
        color:"#3277a8",
        fontSize:16,
        marginBottom:20
    },
    inputText:{
        backgroundColor:GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:24,
        color:GlobalStyles.colors.primary700

    },
    multiInput:{
      minHeight:100,
      textAlignVertical:"top"
    }

})