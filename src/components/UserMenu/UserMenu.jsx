import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <motion.div
      className={s.wrapper}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className={s.text}>Welcome, {name}!</p>
      <button
        className={`${s.button} ${isHovered ? s.buttonHover : ""} ${
          isActive ? s.buttonActive : ""
        }`}
        onClick={handleLogout}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Logout
      </button>
    </motion.div>
  );
};

export default UserMenu;
