import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return (
      <p className={s.message}>
        {"No contacts" +
          (filteredContacts.length === 0
            ? " in your phonebook yet!"
            : " matching the query were found!")}
      </p>
    );
  }

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
