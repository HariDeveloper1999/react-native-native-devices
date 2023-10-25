import { createContext,useReducer } from "react";
const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05')
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01')
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-18')
    },
    {
      id: 'e6',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e7',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05')
    },
    {
      id: 'e8',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01')
    },
    {
      id: 'e9',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e10',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-18')
    }
  ];

export const ExpoContext=createContext({
    expenses:[],
    addExpense:({description,id,date})=>{},
    setExpenses:(expenses)=>{},
    deleteExpense:({id})=>{},
    upDateExpense:(id, {description,amount,date})=>{}
})

const expenseReducer =(state,action)=>{
    switch(action.type){
        case  "SET" :
          const reversed=action.payload.reverse()
                     return reversed
        case "ADD" :
          
            return [action.payload,...state]
        case "UPDATE" :
            const upDatableExpenseIndex = state.findIndex((expense)=>expense.id == action.payload.id);
            const upDatableIndex=state[upDatableExpenseIndex]
            const upDatadItem = {...upDatableIndex,...action.payload.data}
            const upDatedExpenses=[...state]
            upDatedExpenses[upDatableExpenseIndex] = upDatadItem
            return upDatedExpenses;

        case "DELETE":
           
            return state.filter((expense) => expense.id !== action.payload);
        default:
         return state;
    }
}

export default function ExportContextProvider({children}){
   const [expenseState,dispatch] = useReducer(expenseReducer,[]);

   const setExpenses=(expenses)=>{
     dispatch({type:'SET',payload:expenses})
   }

   const addExpense=(expenseData)=>{
      dispatch({type:"ADD",payload:expenseData})

   }
   const deleteExpense =(id)=>{
    dispatch({type:'DELETE',payload:id})
   }

   const upDateExpense =(id,expenseData)=> {
    dispatch({type:"UPDATE", payload:{id:id,data:expenseData}})
   }

   let value={
    expenses:expenseState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    upDateExpense:upDateExpense,
    setExpenses:setExpenses
   }

   return(
     <ExpoContext.Provider value={value}>
        {children}
    </ExpoContext.Provider>
   )

}

