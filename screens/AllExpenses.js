import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import {ExpoContext} from "../store/expo-context"
import { useContext} from "react";

export default function AllExpenses(){
    const expenseCtx=useContext(ExpoContext)

    return(
       <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="total" message="You Don't have any Expenses"/>
    )

}