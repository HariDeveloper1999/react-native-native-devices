import { View,FlatList,Text } from "react-native";
import ExpensesItem from "./ExpensesItem";


const renderDetails=(itemData)=>{
    return(
       <ExpensesItem {...itemData.item} />
    )

}

export default function ExpensesList({expenses}){
    return(
        <FlatList
            data={expenses}
            renderItem={renderDetails}
            keyExtractor={(item)=>item?.id}
        
        />
    )

}