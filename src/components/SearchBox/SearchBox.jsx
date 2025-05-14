import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrapper}>
      <h3>Find contacts by name or number</h3>
      <input
        className={s.searchInput}
        value={filter}
        type="text"
        onChange={(event) => dispatch(setNameFilter(event.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
