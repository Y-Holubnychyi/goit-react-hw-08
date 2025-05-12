import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  console.log("Rendering UserMenu", name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Welcome, {name}!</p>
      <button className={css.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
