import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contacts/selectors";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const regex = /^(?=.*?[1-9])[0-9()-]+$/;

const addProfileSchema = yup.object({
  name: yup
    .string()
    .min(3, "name should have at least 3 symbols")
    .max(50, "name should have less than 50 symbols")
    .required("Name is required"),
  number: yup
    .string()
    .required("phone is required")
    .min(3, "too short!")
    .max(50, "too long!")
    .matches(regex, "enter valid number"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onAddProfile = (formData, actions) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase().trim() === formData.name.toLowerCase().trim()
    );

    if (isDuplicate) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    dispatch(addContact(formData));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onAddProfile}
      validationSchema={addProfileSchema}
    >
      <Form className={s.formWrapper}>
        <label className={s.label}>
          Name
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

        <label className={s.label}>
          Number
          <Field
            className={s.input}
            type="text"
            name="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>

        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
