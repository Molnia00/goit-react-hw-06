



function SearchBox({ value, onSearch }) {
    return (
        <>
            
            <h3>Find contact by name</h3>
            <input
                type="text"
                value={value}
                placeholder="Search contacts"
            onChange={(event) => onSearch(event.target.value)}>
                </input>
        </>
    )
}


export default SearchBox;