import { View,Text,StyleSheet } from "react-native";
import {GlobalStyles} from "../../constants/Style";


export default function ExpensesSummary({expenses,periodName}){
    const expensesSum=expenses.reduce((sum,expense)=>{
      return sum+expense.amount
     },0
    )
    return(
        <View style={styles.root}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.periodSum}>${expensesSum.toFixed(2)}</Text>
        </View>
    )

}
const styles=StyleSheet.create({
    root:{
        padding:9,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
   },
   period:{
    fontSize:12,
    color:GlobalStyles.colors.primary400

   },
   periodSum:{
    fontSize:16,
    fontWeight:'bold',
    color:GlobalStyles.colors.primary500
   }

})