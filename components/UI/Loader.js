import React from 'react'
import { View,ActivityIndicator,StyleSheet } from 'react-native'

function Loader() {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={50} color="white"/>
    </View>
  )
}

export default Loader;


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:24,
        backgroundColor:'yellow'
    }
})