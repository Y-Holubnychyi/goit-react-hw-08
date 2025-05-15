import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import s from "./Contact.module.css";

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDeleteProfile = () => {
    setIsModalOpen(true);
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

      <button
        className={s.iconButton}
        onClick={onDeleteProfile}
        title="Delete contact"
      >
        <MdDeleteForever size={22} />
      </button>

      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        id={id}
        name={name}
      />
    </div>
  );
}

export default Contact;
