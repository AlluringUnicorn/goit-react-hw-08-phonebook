import { createSlice } from '@reduxjs/toolkit';
import { fetchcontacts, addContact, deleteContact } from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.entities = action.payload;
  state.error = null;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.entities.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.entities = state.entities.filter(
    contact => contact.id !== action.payload.id
  );
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchcontacts.pending, handlePending)
      .addCase(fetchcontacts.fulfilled, handleFulfilled)
      .addCase(fetchcontacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
