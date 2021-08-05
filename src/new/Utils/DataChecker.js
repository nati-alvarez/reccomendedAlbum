//This function is called on most pages, it checks weather the reducer has relevant information in it 
// prior to an API request being made. If the data already exists then the information is pulled from the reducer
// this eliminates unneccessary API requests. 

//HOOKS
import {useSelector} from "react-redux";

export function DataChecker() {
    const data = useSelector((state) => state);
    console.log(data)
    return data
}

