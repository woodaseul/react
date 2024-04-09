import { useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ contactAdd }) {
  const [state, setState] = useState({
    name: "",
    contact: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (state.name === "" || state.contact === "") {
      alert("입력필수");
      return;
    }
    contactAdd(state.name, state.contact);
    setState({
      name: "",
      contact: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          value={state.name}
          name="name"
          onChange={onChange}
          className="name"
          placeholder="이름 ..."
        />
        <input
          value={state.contact}
          name="contact"
          onChange={onChange}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
