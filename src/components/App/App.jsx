// // import css from "./App.module.css";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from "../ContactForm/ContactForm";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations";

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className={css.container}>
//         <h1 className={css.headerText}>Phonebook</h1>
//         <ContactForm />
//         <SearchBox />
//         <ContactList />
//       </div>
//     </>
//   );
// }

// export default App;

import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Loader from "../Loader/Loader";
// import { refreshUser } from "../../redux/auth/operations";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
// import { selectIsRefreshing } from "../../redux/auth/selectors";

import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          {isRefreshing ? (
            <span>Please, wait a moment...</span>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute>
                    <RegistrationPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute>
                    <LoginPage />
                  </RestrictedRoute>
                }
              />
            </Routes>
          )}
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
