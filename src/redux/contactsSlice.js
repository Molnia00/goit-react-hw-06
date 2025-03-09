import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
	
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: (state, action) => {
            state.items.push(action.payload)
        },
        deleteContacts: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload )
        },
        
    }
})
    

export const contactsReducers = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
export const contSelect = state => state.contacts.items;