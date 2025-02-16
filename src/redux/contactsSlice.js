import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  contacts: {
        items: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]

	}
}


const slice = createSlice({
    name: 'items',
    initialState,

    reducers: {
        
        deleteContact: (state, action) => {
            state.iteams = state.iteams.filter(iteam => iteam.id !== action.payload)
        },

        addContact: (state, action) => { 
            state.iteams.push(action.payload)
        },

        
    }
})


export const SliceReducers = slice.reducers;
export const { addContact, deleteContact} = slice.actions;

 