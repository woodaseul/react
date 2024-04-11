import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { contextState } from "../App";

export default function ContactList() {
  const contacts = useContext(contextState);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((i) => (
        <ContactItem key={i.id} {...i} />
      ))}
    </div>
  );
}
