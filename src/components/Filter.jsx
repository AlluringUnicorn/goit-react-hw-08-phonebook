import { useSelector ,useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilterChange} value={filter} />
    </>
  );
};

