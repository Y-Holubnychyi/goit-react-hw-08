import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
          <UserMenu />
        </>
      ) : (
        <>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={css.link}>
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
