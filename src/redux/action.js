import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact =
  ('contact/add',
  (name, number) => ({
    payload: { id: shortid.generate(), name, number },
  }));

const changeFilter = createAction('contacts/changeFilter');

const deleteContact = createAction('contact/delete');

const contactsAction = { addContact, changeFilter, deleteContact };

export default contactsAction;
