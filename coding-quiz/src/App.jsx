import { useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useMemo } from "react";

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

export const contextState = createContext();
export const contextDispatch = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const contactAdd = useCallback((name, contact) => {
    dispatch({
      type: "ADD",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  const contactDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoDispatch = useMemo(
    () => ({
      contactAdd,
      contactDelete,
    }),
    []
  );

  return (
    <div className="App">
      <h2>Contact List</h2>
      <contextState.Provider value={contacts}>
        <contextDispatch.Provider value={memoDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </contextDispatch.Provider>
      </contextState.Provider>
    </div>
  );
}

export default App;
