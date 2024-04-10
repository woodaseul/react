import { memo } from "react";
import "./ContactItem.css";

function ContactItem({ id, name, contact, contactDelete }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => contactDelete(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
