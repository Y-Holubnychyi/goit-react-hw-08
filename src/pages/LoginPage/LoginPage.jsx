import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { loginProfileSchema } from "../../util/schemas";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        setSubmitting(false);
      })
      .catch((err) => {
        setSubmitting(false);
        alert(err.message);
      });
  };

  return (
    <div className={s.container}>
      <div className={s.formWrapper}>
        <h2 className={s.title}>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginProfileSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className={s.label}>Email</label>
              <Field type="email" name="email" required className={s.input} />
              <ErrorMessage name="email" component="div" className={s.error} />

              <label className={s.label}>Password</label>
              <Field
                type="password"
                name="password"
                required
                className={s.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={s.error}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={s.button}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
