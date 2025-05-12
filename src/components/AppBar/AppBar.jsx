import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? null : <AuthNav />}{" "}
      {/* Покажемо тільки AuthNav, якщо користувач не залогінений */}
    </header>
  );
};

export default AppBar;
