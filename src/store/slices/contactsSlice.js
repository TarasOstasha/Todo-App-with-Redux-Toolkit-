import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // generate random id




const initialState = {
    contacts: [{
        id: uuidv4(),
        isDone: false,
        fullName: 'Taras',
        date: new Date().toISOString().slice(0, 10) || ''
    }]
}



const contactsSlice = createSlice({
    initialState,
    name: 'contacts',
    reducers: {
        createContact: (state, {payload}) => {
            state.contacts.push({...payload, isDone: false, id: uuidv4()})
            // state.contacts.push({...payload, id: uuidv4()})
        },
        deleteContact: (state, {payload}) => {
            state.contacts = state.contacts.filter(c=> c.id !== payload)
        },
        updateContact: (state, {payload: {id, data}}) => {
            const updatedContactIndex = state.contacts.findIndex(item => item.id === id);
            state.contacts[updatedContactIndex] = {...state.contacts[updatedContactIndex], ...data}
        }
    }
});



const { reducer, actions } = contactsSlice;
export const { deleteContact, updateContact, createContact } = actions;


export default reducer;