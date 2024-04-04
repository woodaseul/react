import "./App.css";
import Welcome from "./components/welcome";

const userInfo = {
  name: "LEE",
  isMember: false,
};

function App() {
  return (
    <>
      <Welcome {...userInfo} />
    </>
  );
}

export default App;
