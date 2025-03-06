import Contact from './contacts';
import s from './contact.module.css'
import { useSelector } from "react-redux";
import { contSelect } from '../redux/contactsSlice';


function ContactList() {
  const contacts = useSelector(contSelect);
  return (
    <div className={s.listOfContacts}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          phone={item.number}
        />
      ))}
    </div>
  );
}




export default ContactList;