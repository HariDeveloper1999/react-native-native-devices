import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/Style';
import {Ionicons} from "@expo/vector-icons"
import IconButton from './components/UI/IconButton';
import ExportContextProvider from "./store/expo-context"

export default function App() {
  const Stack=createNativeStackNavigator();
  const BottomTabs=createBottomTabNavigator()

  const ExpenseOverView = () => {
    return(
      <BottomTabs.Navigator
        screenOptions={({navigation})=>({
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:"white",
          tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
          tabBarActiveTintColor:"#f5d418",
          headerRight:({tintColor})=>(
          <IconButton name="add" size={24} color={tintColor} pressHandler={()=>{navigation.navigate('ManageExpenses')}}/>
          )

        })}
      
      >
         <BottomTabs.Screen 
        name="RecentExpenses" 
        component={RecentExpenses}
        options={{
          title:"Recent Expenses",
           tabBarLabel:"Reacent",
            tabBarIcon:({color,size})=><Ionicons name="hourglass" size={size} color={color}/>

         }}
        
        />

        <BottomTabs.Screen 
           name="AllExpenses" 
           component={AllExpenses}
           options={{
            title:"All Expenses",
             tabBarLabel:"All",
              tabBarIcon:({color,size})=><Ionicons name="calendar" size={size} color={color}/>

           }}
        />
       

      </BottomTabs.Navigator>
    )
  }
  return (
    <>
      <StatusBar backgroundColor="black" style="light" />
      <ExportContextProvider>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:'white'
        }}
        
        >
          <Stack.Screen 
            name="ExpensesOveraview" 
            component={ExpenseOverView}
            options={{headerShown:false}} 
           />
            <Stack.Screen 
             name="ManageExpenses" 
             component={ManageExpenses} 
             options={{presentation:"modal"}}
             
             />
        </Stack.Navigator>
      </NavigationContainer>
      </ExportContextProvider>
    </>
  );
}

