import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegistrationPage.module.css";

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        setSubmitting(false);
        resetForm();
      })
      .catch((err) => {
        setSubmitting(false);
        alert(err.message);
      });
  };

  return (
    <div className={s.pageWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.formWrapper}>
            <h2 className={s.formTitle}>Register</h2>

            <div className={s.inputGroup}>
              <label>Name</label>
              <Field type="text" name="name" className={s.input} />
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>

            <div className={s.inputGroup}>
              <label>Email</label>
              <Field type="email" name="email" className={s.input} />
              <ErrorMessage name="email" component="div" className={s.error} />
            </div>

            <div className={s.inputGroup}>
              <label>Password</label>
              <Field type="password" name="password" className={s.input} />
              <ErrorMessage
                name="password"
                component="div"
                className={s.error}
              />
            </div>

            <div className={s.inputGroup}>
              <label>Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className={s.input}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={s.error}
              />
            </div>

            <button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
