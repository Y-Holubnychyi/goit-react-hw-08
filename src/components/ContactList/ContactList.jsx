import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return (
      <p style={{ color: "red" }}>
        No contacts found. Add a new contact to start!
      </p>
    );
  }

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
