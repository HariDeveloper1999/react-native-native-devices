
import { View,StyleSheet,Text, ScrollView,Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { GetFullDate } from "../../util/GetDate";
import { GlobalStyles } from "../../constants/Style";

export default function ExpensesForm({defaultValues,onSubmit,onCancel,labelText}){
  

  const[inputValues,setInputValues]=useState({
    amount:{value:defaultValues ? defaultValues?.amount.toString() : '',isValid: !!defaultValues},
    date:{value:defaultValues ? GetFullDate(defaultValues?.date):'',isValid: !!defaultValues},
    description:{value:defaultValues ? defaultValues?.description:'',isValid: !!defaultValues}

  })
  

    const inputHandler = (definedValue,enteredValue) => {
      setInputValues((prev)=>{
        return{
          ...prev,
        [definedValue]:{value:enteredValue,isValid:true}
        }
      })

    }

    const submitHandler=()=>{
      const expenseData={
        amount:+(inputValues.amount.value),
        date:new Date(inputValues.date.value),
        description:inputValues.description.value
      }
      const amountIsValid = expenseData.amount > 0;
      const dateIsValid = expenseData.date.toString !== "Invalid Date";
      const descriptionValid=expenseData.description.trim().length > 0 ;
      if((!amountIsValid) ||(!dateIsValid) || (!descriptionValid)){
        setInputValues((current)=>{
          return{
           amount:{value:current.amount.value,isValid:amountIsValid},
           date:{value:current.date.value,isValid:dateIsValid},
           description:{value:current.description.value,isValid:descriptionValid}
          }
        })
      }
      onSubmit(expenseData)
    }
    const dataValid = (!inputValues.amount.value) || (!inputValues.date.value) || (!inputValues.description.value)
    return(
      <ScrollView>
      
      <View style={styles.form}>
        
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
           <Input label="Amount" style={styles.inputStyle} textInputConfigue={
            {
              keyboardType:"decimal-pad",
              onChangeText:(e)=>inputHandler("amount",e),
              value:inputValues.amount.value

            }
            
           }/>
           <Input label="Date" style={styles.inputStyle} textInputConfigue={{
              placeHolder:"YYYY-MM-DD",
              maxLength:10,
              onChangeText:(e)=>inputHandler("date",e),
              value:inputValues.date.value


           }}/>
             </View>
           <Input label="Description" textInputConfigue={{
             multiline:true,
             onChangeText:(e)=>inputHandler("description",e),
             value:inputValues.description.value
           }}/>
           {dataValid && <Text style={styles.errorStyle}>Data is Not valid, Please check input values</Text>}

       <View style={styles.buttonContainer}>
               <Button 
                 style={styles.btn}
                 mode="flat"
                 PressHandler={onCancel}
               >Cancel
               </Button>
               <Button
               style={styles.btn}
                PressHandler={submitHandler}
               
               >
                  {labelText}
               </Button>
           </View>
      
        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
  form:{
    marginTop:20
  },
  inputRow:{
    justifyContent:'space-between',
    flexDirection:'row',
    margintop:20
    
  },
  inputStyle:{
    flex:1,

  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    textAlign:'center',
    marginVertical:16
  },
  errorStyle:{
    color:"red",
    backgroundColor:"black",
    padding:10,
    borderRadius:6

  }


})