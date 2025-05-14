import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const activeStyle = ({ isActive }) => clsx(s.link, isActive && s.activeLink);

  return (
    <AnimatePresence>
      <motion.nav
        className={s.nav}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <NavLink to="/" className={activeStyle}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={activeStyle}>
            Contacts
          </NavLink>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navigation;
