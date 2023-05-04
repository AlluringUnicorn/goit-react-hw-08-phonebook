import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/thunk';
import css from './App.module.css';

export const ListItem = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.entities);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = ({ target }) => {
    dispatch(deleteContact(target.dataset.id));
  };

  return filteredContacts.map(user => (
    <li key={user.id} className={css.list_item}>
      {user.name}: {user.phone}
      <button
        className={css.delete_btn}
        type="button"
        onClick={handleDelete}
        data-id={user.id}
      >
      Delete
      </button>
    </li>
  ));
};

