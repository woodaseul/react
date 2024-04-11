import { memo } from "react";
import "./ContactItem.css";
import { useContext } from "react";
import { contextDispatch } from "../App";

function ContactItem({ name, contact, id }) {
  const { contactDelete } = useContext(contextDispatch);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button
        onClick={() => {
          contactDelete(id);
        }}
      >
        🗑️ Remove
      </button>
    </div>
  );
}

export default memo(ContactItem);
