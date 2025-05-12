import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../../redux/contacts/operations";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Contacts</h2>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Тут можна додати форму для додавання нового контакту */}
    </div>
  );
};

export default ContactsPage;
