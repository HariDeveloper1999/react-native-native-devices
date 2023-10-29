import PlaceForm from "../components/PlaceForm";
import { insertPlace } from "../util/database";

export default function AddPlace({navigation}){
    const createPlaceHandler=async(place)=>{
        await insertPlace(place)
        navigation.navigate("All Places",{
         place:place
        })
    }
    return(
        <PlaceForm onCreatePlace={createPlaceHandler}/>
    )
}