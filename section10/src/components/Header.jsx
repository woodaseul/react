import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      {/* 이모지 : 윈도우 + . */}
      <h3>오늘은 💖</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

//const memoizedHeader = memo(Header);
//export default memoizedHeader;
export default memo(Header);
