import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { motion } from "framer-motion";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.div
      className={s.wrapper}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className={s.text}>Welcome, {name}!</p>
      <button className={s.button} onClick={handleLogout}>
        Logout
      </button>
    </motion.div>
  );
};

export default UserMenu;
