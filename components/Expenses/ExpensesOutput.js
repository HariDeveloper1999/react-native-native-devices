import { View,StyleSheet,Text } from "react-native"
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/Style";



export default function ExpensesOutput({expenses,expensesPeriod,message}){
    return(
      expenses.length > 0 ?
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>

        </View>
        :
        <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={{color:"white",fontSize:20}}>{message}</Text>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
  container:{
    padding:24,
    backgroundColor:"#f5d418",
    flex:1,
    paddingBottom:0,
    paddingHorizontal:24,
    paddingTop:24,

  },
  messageContainer:{
    backgroundColor:'black',
    color:"white",
    fontSize:16,
    borderRadius:10,
    borderWidth:2,
    borderColor:"yellow",
    textAlign:'center',
    padding:20,
    justifyContent:'center',
   
    
  }

})