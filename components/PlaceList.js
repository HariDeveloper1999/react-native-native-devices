import { FlatList,StyleSheet,View,Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../constants/colors";


export default function PlaceList({places}){
    return(
        places.length > 0 ?
        <FlatList 
        data={places}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=><PlaceItem place={item}/>}
        
        />
        :
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Favorite place Did n't Added Yet,Please add some Favorite place</Text>
        </View>
    )

}

const styles=StyleSheet.create({
    errorContainer:{
        flex:1,
        justifyContent:"center",
        alignItem:"center"
    },
    errorText:{
       fontSize:16,
       color:Colors.primary100
    }
})