import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
// import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
