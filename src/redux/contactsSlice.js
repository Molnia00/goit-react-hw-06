import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    items: [],
	
}
    ;

const slice = createSlice({
    name: 'contacts',
    initialStates,
    reducers: {
        addContacts: (state, action, { newContact }) => {
            state.items + newContact;
        }
    }
})
    

export const contactsReducers = slice.reducer;
export const { addContacts } = slice.actions;