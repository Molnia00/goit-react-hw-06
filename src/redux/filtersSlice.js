import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    name: "",
}


const slice = createSlice({
    name: 'contactsFilter',
    initialStates,
    reducers:{}
})
    

export const contactsFilterReducers = slice.reducer;