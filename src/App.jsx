import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing, selectIsLoggedIn } from "./redux/auth/selectors";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./util/toastStyle";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Loader from "./components/Loader/Loader";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  element={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  element={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
              }
            />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};

export default App;
