import { useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];

    case "DELETE":
      return state.filter((i) => i.id !== action.targetId);

    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const contactAdd = (name, contact) => {
    dispatch({
      type: "ADD",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  };

  const contactDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor contactAdd={contactAdd} />
      </section>
      <section>
        <ContactList contacts={contacts} contactDelete={contactDelete} />
      </section>
    </div>
  );
}

export default App;
