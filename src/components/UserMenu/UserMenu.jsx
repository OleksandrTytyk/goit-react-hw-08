// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";
// // import { logout } from "../../redux/auth/operations";
// import css from "./UserMenu.module.css";
// import { selectUser } from "../../redux/auth/selectors";
// import { logout } from "../../redux/auth/operations";

// const UserMenu = () => {
//   const userData = useSelector(selectUser);
//   const dispatch = useDispatch();
//   return (
//     <div className={css.userMenu}>
//       <p className={css.userInfo}>Welcome, {userData.name}✌</p>
//       <button
//         className={css.btnLogaout}
//         onClick={() => dispatch(logout())}
//         type="button"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default UserMenu;

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {userData.name}✌</p>
      <button onClick={() => dispatch(logout())} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
