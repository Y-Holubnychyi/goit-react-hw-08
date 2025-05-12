import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import s from "./Navigation.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <AnimatePresence>
      {!isRefreshing && (
        <motion.nav
          className={s.nav}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink to="/contacts" className={s.link}>
                Contacts
              </NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/register" className={s.link}>
                Register
              </NavLink>
              <NavLink to="/login" className={s.link}>
                Login
              </NavLink>
            </>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
