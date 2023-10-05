import { Pressable,View,Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Style";
import { GetFullDate } from "../../util/GetDate";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesItem({id,description, date, amount, }){
    const navigation=useNavigation()
    const pressHandler=()=>{
        navigation.navigate("ManageExpenses",{
          expenseId:id  
        })
    }
    return(
        <Pressable onPress={pressHandler} style={({pressed})=>pressed&&styles.pressed}>
            <View style={styles.container} >
                <View>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={{color:'white'}}>{GetFullDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                   <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>

            </View>
        </Pressable>
    )

}
const styles=StyleSheet.create({
    pressed:{
        opacity:0.75,
  

    },
    container:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
        marginTop:10,
    
        

    },
    textBase:{
        color:GlobalStyles.colors.primary500
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold',
        color:'white'

    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:4,
        minWidth:70
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold',
        textAlign:'center'
    }

})