import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrapper}>
      <h3>Find contacts by name or number</h3>
      <input
        className={s.searchInput}
        value={filter}
        type="text"
        onChange={(event) => dispatch(setFilter(event.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
