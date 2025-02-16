import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    name: "",
};

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        selectContacts: (state, action) => { 
            state.filter = action.payload
        }
    }
})

export const filterReducers = slice.reducer;
export const { selectContacts } = slice.actions;