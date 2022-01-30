import { useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li className={s.listItem}>
      <span className={s.span}>{name}:</span>
      <span className={s.span}>{number}:</span>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={() => {
          onDelete({ id });
        }}
      >
        Delete
      </button>
    </li>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
