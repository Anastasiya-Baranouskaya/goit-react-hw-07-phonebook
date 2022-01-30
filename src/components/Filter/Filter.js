import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import { contactsActions } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Component() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const changeFilter = useCallback(
    e => {
      dispatch(contactsActions.filterContact(e.target.value));
    },
    [dispatch],
  );

  const nameFind = uuidv4();
  const idFind = uuidv4();
  return (
    <div className={s.div}>
      <label htmlFor={nameFind} className={s.label}>
        Find contacts by name:
      </label>
      <input type="text" value={filter} id={idFind} onChange={changeFilter} />
    </div>
  );
}
