import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import {ExpoContext} from "../store/expo-context"
import { useContext, useEffect, useState} from "react";
import { getDateMinusdate } from "../util/GetDate";
import { GetData } from "../util/ApiCalls/Api";
import Loader from "../components/UI/Loader";



export default function RecentExpenses(){
    const expenseCtx = useContext(ExpoContext);
    const [isFetching,setIsFetching]=useState(true)
    
    const recentExpenses=expenseCtx.expenses.filter((expense)=>{
        const today= new Date();
        const date7DayaAgo = getDateMinusdate(today,7);
        return expense.date > date7DayaAgo

    })

    useEffect(()=>{
        setIsFetching(true)
         const innerFunction= async()=>{
            const response = await GetData();
            expenseCtx.setExpenses(response)
            setIsFetching(false)

         }
     
         innerFunction()
    

    },[])
    if(isFetching){
     return <Loader/>
    }

    return(
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Summary in total 7 days" message="You don't have any expenses in A Last 7 days"/>
    )

}