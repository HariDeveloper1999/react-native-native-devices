import { useLayoutEffect,useState } from "react";
import { Text,View,StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/Style";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { ExpoContext } from "../store/expo-context";
import ExpensesForm from "../components/ManageExpenses/ExpensesForm";
import {AddingData, deleteExpenses, upDatedExpenses} from "../util/ApiCalls/Api"
import Loader from "../components/UI/Loader";


export default function ManageExpenses({route,navigation}){
    const expenseCtx=useContext(ExpoContext)
    const [submiting,setSubmitting]=useState(false)

    const routeId = route?.params?.expenseId;
    const isEdited= !!routeId;
   
    const selectedIdObj=expenseCtx?.expenses?.find((el)=>el.id == routeId)
  

     useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEdited? "Edit The Expense" :"Add The Expense"
        })

     },[navigation,isEdited])
     const deleteHandler = async() => {
        setSubmitting(true)
        await deleteExpenses(routeId)
        expenseCtx.deleteExpense(routeId)
        navigation.goBack()

     }

     const cancelHandler = ()=> {
      navigation.goBack()
     }

     const confirmHandler = async(expenseData) => {
        setSubmitting(true)
        if(isEdited){
            
             expenseCtx.upDateExpense(routeId,expenseData)
            upDatedExpenses(routeId,expenseData)
        }else{
          const id = await AddingData(expenseData)
            expenseCtx.addExpense({...expenseData,id:id})
           

        }
        navigation.goBack()
    }
    if(submiting){
        return <Loader/>
    }

    return(
       <View style={styles.container}>
        <ExpensesForm defaultValues={selectedIdObj} onSubmit={confirmHandler} onCancel={cancelHandler} labelText={isEdited? "Update":"Add"} />
           
          {isEdited&&
           <View style={styles.pressContainer}>
              <IconButton pressHandler={deleteHandler} name="trash" size={38} color={GlobalStyles.colors.error500} />

           </View>
          }
       </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:26,
        backgroundColor:"#f5d418",
    
    },
    pressContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    btn:{
        minWidth:120,
        marginHorizontal:8

    }

})