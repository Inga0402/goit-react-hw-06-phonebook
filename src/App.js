import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getVisibleContacts, getContacts } from './redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './components/ContactForm';
import st from './App.module.css';

function App() {
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  return (
    <div className={st.container}>
      <h1 className={st.title}>PHONEBOOK</h1>
      <ContactForm />
      <h2 className={st.subtitle}>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {visibleContacts.length > 0 && <ContactList />}
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
