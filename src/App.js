import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts, getContacts } from './redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './components/Button';
import st from './App.module.css';

function App() {
  const [showModal, setShowmodal] = useState(false);
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  const togleModal = () => setShowmodal(!showModal);
  return (
    <div className={st.container}>
      <h1 className={st.title}>PHONEBOOK</h1>
      <Button onClick={togleModal} className={st.btn} value="Add contact" />
      <h2 className={st.subtitle}>Contacts</h2>
      {contacts.lenght > 1 && <Filter />}
      {visibleContacts.lenght > 0 && <ContactList />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
