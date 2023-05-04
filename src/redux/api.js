import axios from 'axios';

axios.defaults.baseURL = 'https://6449776eb88a78a8f008a9de.mockapi.io';

export async function loadContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function removeContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
