import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts, contactDelete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((it) => (
        <ContactItem key={it.id} {...it} contactDelete={contactDelete} />
      ))}
    </div>
  );
}
