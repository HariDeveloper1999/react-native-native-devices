import { useLayoutEffect } from "react";
import { Text,View,StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/Style";
import Button from "../components/UI/Button";


export default function ManageExpenses({route,navigation}){

    const routeId = route?.params?.expenseId;
    const isEdited= !!routeId;
   
    

     useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEdited? "Edit The Expense" :"Add The Expense"
        })

     },[navigation,isEdited])
     const deleteHandler = () => {
        navigation.goBack()

     }

     const cancelHandler = ()=> {
      navigation.goBack()
     }

     const confirmHandler = () => {
        navigation.goBack()
    }

    return(
       <View style={styles.container}>
           <View style={styles.buttonContainer}>
               <Button 
                 style={styles.btn}
                 mode="flat"
                 PressHandler={cancelHandler}
               >Cancel
               </Button>
               <Button
               style={styles.btn}
                PressHandler={confirmHandler}
               
               >
                  {isEdited? "Update":"Add"}
               </Button>
           </View>
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