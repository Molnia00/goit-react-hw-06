
import { useDispatch } from "react-redux";
import { contFilter } from "../redux/filtersSlice";


function SearchBox(){
    const dispatch = useDispatch()
    return (
        <>
            
            <h3>Find contact by name</h3>
            <input
                type="text"
                placeholder="Search contacts"
                onChange={(event) => dispatch(contFilter(event.target.value))}/>
               
        </>
    )
}


export default SearchBox;
