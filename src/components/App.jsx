import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from './App.module.css';
import { fetchcontacts } from 'redux/thunk';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch])
  

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};

export default App;




