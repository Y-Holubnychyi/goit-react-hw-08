import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.appContainer}>
      <h2 className={s.title}>Your Contacts</h2>

      <ContactForm />
      <SearchBox />

      {isLoading && <Loader text="Loading contacts..." />}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!isLoading && !error && <ContactList />}
    </div>
  );
};

export default ContactsPage;
