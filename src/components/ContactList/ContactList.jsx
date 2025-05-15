import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const { original, visible } = useSelector(selectFilteredContacts);

  if (original.length === 0) {
    return (
      <p className={s.noContactsMessage}>No contacts in your phonebook yet!</p>
    );
  }

  if (visible.length === 0) {
    return (
      <p className={s.noContactsMessage}>
        No contacts matching the query were found!
      </p>
    );
  }

  return (
    <ul className={s.contactList}>
      {visible.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
