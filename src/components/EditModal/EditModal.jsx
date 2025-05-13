import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiEditContacts } from "../../redux/contacts/operations";
import { editProfileSchema } from "../../util/schemas";
import toast from "react-hot-toast";
import s from "./EditModal.module.css";

const initialValues = {
  name: "",
  number: "",
};

const EditModal = ({ isOpenEdit, onEditClose, id }) => {
  const dispatch = useDispatch();

  const onEditProfile = (formData) => {
    const userData = {
      ...formData,
      id: id,
    };
    dispatch(apiEditContacts(userData))
      .unwrap()
      .then(() => {
        toast.success("Contact updated");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
    onEditClose();
  };

  return (
    <Modal
      isOpen={isOpenEdit}
      ariaHideApp={false}
      overlayClassName={s.customOverlayStyles}
      className={s.customStyles}
      onRequestClose={onEditClose}
    >
      <button onClick={onEditClose} type="button" className={s.closeBtn}>
        ❌
      </button>
      <div className={s.modalContent}>
        <Formik
          initialValues={initialValues}
          onSubmit={onEditProfile}
          validationSchema={editProfileSchema}
        >
          <Form className={s.formField}>
            <label className={s.inputField}>
              <span className={s.inputTitle}>Name</span>
              <Field
                className={s.inputArea}
                type="text"
                name="name"
                placeholder="Vasil Hmara"
              />
              <ErrorMessage
                className={s.errorMessage}
                name="name"
                component="span"
              />
            </label>

            <label className={s.inputField}>
              <span className={s.inputTitle}>Number</span>
              <Field
                className={s.inputArea}
                type="text"
                name="number"
                placeholder="xxx-xx-xx"
              />
              <ErrorMessage
                className={s.errorMessage}
                name="number"
                component="span"
              />
            </label>
            <button type="submit" className={s.addBtn}>
              Edit
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default EditModal;
