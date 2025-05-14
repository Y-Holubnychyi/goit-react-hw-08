import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const onDeleteProfile = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contactWrapper}>
      <div className={s.contactInfo}>
        <div className={s.infoRow}>
          <FaUser className={s.icon} />
          <span className={s.contactName}>{name}</span>
        </div>
        <div className={s.infoRow}>
          <FaPhone className={s.icon} />
          <span className={s.contactNumber}>{number}</span>
        </div>
      </div>
      <button className={s.deleteButton} onClick={onDeleteProfile}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
