import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontacts } from 'redux/thunk';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Form } from './Form';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      {isLoggedIn && contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};
