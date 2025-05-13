import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  const activeStyle = ({ isActive }) => clsx(s.link, isActive && s.activeLink);

  return (
    <div className={s.navWrapper}>
      <NavLink className={activeStyle} to="/register">
        Register
      </NavLink>
      <NavLink className={activeStyle} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
