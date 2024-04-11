import { useState } from "react";
import "./ContactEditor.css";
import { useContext } from "react";
import { contextDispatch } from "../App";

export default function ContactEditor() {
  const { contactAdd } = useContext(contextDispatch);

  const [state, setState] = useState({
    name: "",
    contact: "",
  });

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (state.name === "" || state.contact === "") {
      alert("정보입력하세요");
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
          onChange={onChangeState}
          className="name"
          placeholder="이름 ..."
        />
        <input
          value={state.contact}
          name="contact"
          onChange={onChangeState}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
