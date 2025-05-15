import s from "./Loader.module.css";

const Loader = ({ text = "Loading..." }) => {
  return <div className={s.loader}>{text}</div>;
};

export default Loader;
