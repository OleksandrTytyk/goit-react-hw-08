import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
// import {
//   selectError,
//   selectFilteredContacts,
//   selectLoading,
// } from "../../redux/selectors";

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div className={css.contactListContainer}>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul className={css.listEl}>
        {selectContacts.length > 0 &&
          selectContacts.map((item) => (
            <li className={css.itemList} key={item.id}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
