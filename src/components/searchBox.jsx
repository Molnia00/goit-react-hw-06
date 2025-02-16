
import { useDispatch } from "react-redux";
import { selectContacts } from "../redux/filtersSlice";


function SearchBox() {
    const dispatch = useDispatch()
    return (
        <>
            
            <h3>Find contact by name</h3>
            <input
                type="text"
                
                onChange={(event) => dispatch(selectContacts(event.target.value))}
            
                placeholder="Search contacts"
            />
               
        </>
    )
}


export default SearchBox;
