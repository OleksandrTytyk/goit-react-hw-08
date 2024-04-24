// import clsx from "clsx";
// import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";
// import clsx from "clsx";
// import { NavLink } from "react-router-dom";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// const AuthNav = () => {
//   return (
//     <div className={css.authContainer}>
//       <NavLink className={buildLinkClass} to="/register">
//         Registration
//       </NavLink>
//       <NavLink className={buildLinkClass} to="/login">
//         Login
//       </NavLink>
//     </div>
//   );
// };

// export default AuthNav;

import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
