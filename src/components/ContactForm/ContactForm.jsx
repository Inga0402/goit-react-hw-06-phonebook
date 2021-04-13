import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/action';
import { getContacts } from '../../redux/selectors';
import Button from '../Button';
import st from './ContactForm.module.css';
import { toast } from 'react-toastify';

const ContactForm = ({ onClose }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const nameId = shortId.generate();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setContactName(valeu);
        break;
      case 'number':
        setContactNumber;
        break;
      default:
        return;
    }
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    if (contactName === '') {
      toast.error('Enter contact name');
      return;
    }
    if (contacts.find(contact => contact.name === contactName)) {
      toast.error(`${contactName} is already exists`);
      resetForm();
      return;
    }
    dispatch(contactsActions.addContact(contactName, contactNumber));
    resetForm();
    onClose();
  };

  return (
    <form onSubmit={handleFormSubmit} className={st.form}>
      <label htmlFor={nameId} className={st.label}>
        Name
        <input
          className={st.input}
          type="text"
          name="name"
          value={contactName}
          onChange={handleFormChange}
          id={nameId}
        />
      </label>
      <label htmlFor={contactPhoneNumberId} classname={st.label}>
        Phone Number
        <input
          className={st.input}
          type="text"
          name="number"
          value={contactNumber}
          onChange={handleFormChange}
          id={contactPhoneNumberId}
        />
      </label>
      <Button type="submit" className={st.btn} value="Create contact" />
    </form>
  );
};

ContactForm.propTypes = {
  onClose: Proptypes.func,
};

export default ContactForm;
