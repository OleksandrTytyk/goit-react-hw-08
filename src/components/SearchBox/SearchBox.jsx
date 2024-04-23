import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilteredName } from "../../redux/filters/selectors";
// import { selectFilteredName } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilterSelector = useSelector(selectFilteredName);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        name="searchName"
        value={nameFilterSelector}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
