import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Contacts</h2>

      <ContactForm />
      <SearchBox />

      {isLoading && <p>Loading contacts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ContactList />
    </div>
  );
};

export default ContactsPage;
