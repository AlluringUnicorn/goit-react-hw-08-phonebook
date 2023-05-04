import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadContacts, postContact, removeContact } from './api';

export const fetchcontacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await loadContacts();
  return contacts;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contact = await postContact(newContact);
    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contacts = await removeContact(id);
    return contacts;
  }
);
