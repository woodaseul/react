import { useState, useRef } from "react";
// 회원가입 폼
const Register = () => {
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [country, setCountry] = useState("");
  // const [text, setText] = useState("");

  const [input, setInput] = useState({
    name: "",
    date: "",
    country: "",
    text: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onchange = (e) => {
    countRef.current++;
    console.log(countRef);
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  // const onchangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onchangeDate = (e) => {
  //   setDate(e.target.value);
  // };

  // const oncahngeCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  // const onchangeText = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onchange}
          placeholder="이름"
        />
      </div>
      <di>
        <input type="date" name="date" value={input.date} onChange={onchange} />
      </di>
      <div>
        <select name="country" value={input.country} onChange={onchange}>
          <option></option>
          <option>korea</option>
          <option>usa</option>
          <option>japan</option>
        </select>
      </div>
      <div>
        <textarea name="text" value={input.text} onChange={onchange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
