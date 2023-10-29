import { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import {useIsFocused} from"@react-navigation/native";
import { fetchPlaces } from "../util/database";


export default function AllPlaces({route}){
    const isFocused=useIsFocused();
    const [placeData,setPlaceData]=useState([])
    const loadPlaces=async()=>{
        await fetchPlaces()

    }

    useEffect(()=>{
        
        isFocused && loadPlaces()
         setPlaceData(prev=>[...prev,route.params.place])

    },[isFocused])
    return(
        <PlaceList places={placeData}/>
    )
   
}