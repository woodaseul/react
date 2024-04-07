import { useState } from "react";

function CurrenyInput({ curreny, value, onChange }) {
  return (
    <div>
      <label>{curreny} : </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(curreny, e.target.value)}
      />
    </div>
  );
}

function App3() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (curreny, value) => {
    if (curreny === "krw") {
      setState({ krw: value, usd: value / 1300 });
    } else {
      setState({ krw: value * 1300, usd: value });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrenyInput curreny={"krw"} value={state.krw} onChange={onChange} />
      <CurrenyInput curreny={"usd"} value={state.usd} onChange={onChange} />
    </>
  );
}

export default App3;
