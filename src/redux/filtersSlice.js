import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
}


const slice = createSlice({
    name: 'contactsFilter',
    initialState,
    reducers: {
        searchItems: (state, action) => {
        },
    }
})
    

export const contactsFilterReducers = slice.reducer;
export const {searchItems } = slice.actions;