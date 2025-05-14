import Modal from "react-modal";
import s from "./ModalWindow.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ModalWindow = ({ isOpen, onClose, id, name }) => {
  const dispatch = useDispatch();

  const onDeleteProfile = (profileId) => {
    dispatch(deleteContact(profileId))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted");
        onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={s.customOverlayStyles}
      className={s.customStyles}
      onRequestClose={onClose}
    >
      <button onClick={onClose} type="button" className={s.closeBtn}>
        ❌
      </button>

      <div className={s.modalContent}>
        <p className={s.modalText}>
          Are you sure you want to delete{" "}
          <span className={s.contactNameHighlight}>"{name}"</span> ?
        </p>

        <div className={s.btnWrapper}>
          <button type="button" onClick={() => onDeleteProfile(id)}>
            Yes 💀
          </button>
          <button type="button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
