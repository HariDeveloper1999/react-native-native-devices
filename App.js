import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconBtn from './components/IconBtn';
import { Colors } from './constants/colors';
import { init } from './util/database';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';


export default function App() {
  const Stack=createNativeStackNavigator();
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    init().then(()=>setLoading(true)).catch((err)=>console.log("err",err))
  },[])

  if(!loading){
    <AppLoading/>
  }

  
  return (
    <>
      <StatusBar backgroundColor="" style="dark" />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:Colors.primary500},
          headerTintColor:Colors.gray700,
          contentStyle:{backgroundColor:Colors.gray700}
        }} 
        
        >
          <Stack.Screen 
           name="All Places" 
           component={AllPlaces}
           options={({navigation})=>({
            title:"Your Favorite Places ",
            headerRight:({tintColor})=>(
              <IconBtn icon="add" color={tintColor} size={24} onPress={()=>navigation.navigate("Add Place")}/>

            )

           })}
           />
          <Stack.Screen
           name="Add Place" 
           component={AddPlace} options={{
            title:"Add Your Favourite Place"

           }}/>
        </Stack.Navigator>
         
      </NavigationContainer>
    
    </>
  );
}

