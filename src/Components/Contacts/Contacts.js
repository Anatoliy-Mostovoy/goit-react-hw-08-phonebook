import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';

const Contacts = () => {
  const contacts = useSelector(({ contacts, filter }) => {
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return visibleContacts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts &&
          contacts.map(contact => {
            return (
              <li className={s.List} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  className={s.Button}
                  type="button"
                  onClick={() => {
                    dispatch(operations.deleteContact(contact.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteFunction: PropTypes.func,
};

// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   const { contacts, filter } = state;
//   const visibleContact = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );

//   return {
//     contacts: visibleContact,
//   };
// };
// const mapDispatchToProp = dispatch => {
//   return {
//     deleteFunction: id => {
//       return dispatch(action.handleDelete(id));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProp)(Contacts);
