import Contact from './contacts';
import s from './contact.module.css'



function ContactList({onDelete, contacts}) {
  return (
    <ul className={s.listOfContacts}>
      {contacts.map(contact => (
        <li className={s.iteamOfContacts} key={contact.id}>
              <Contact
                  name={contact.name}
                  number={contact.number}
                  onDelete={onDelete}
                  id={contact.id}
              />
        </li>
      ))}
    </ul>
  );
}




export default ContactList;