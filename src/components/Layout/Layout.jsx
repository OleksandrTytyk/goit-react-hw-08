// import AppBar from "../AppBar/AppBar";
// import css from "./Layout.module.css";

import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;
