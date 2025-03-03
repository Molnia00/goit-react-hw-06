import Contact from './contacts';
import s from './contact.module.css'
import { useSelector } from "react-redux";


function ContactList() {
  const contacts = useSelector((state) => state.iteams.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className={s.listOfContacts}>
      {filteredData.map((item) => (
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