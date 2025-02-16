
import ContactList from './components/contactList'
import ContactForm from './components/form/contactForm'
import SearchBox from './components/searchBox'

import './App.css'
import { useState, useEffect } from 'react'









function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ] 
  });

 useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  function deleteContact(deleCont) {
  
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== deleCont )
    });
    
  }
  
  function addContact(addCont) {
    setContacts(prevContacts => [...prevContacts, addCont]);
  }

  const [search, setSearch] = useState('');


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onPlus={addContact} />
     <SearchBox value={search} onSearch={setSearch} />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
         />
      
    </>
  );
}

export default App;