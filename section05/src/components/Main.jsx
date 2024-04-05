import "./Main.css";
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다(값으로써평가되는거)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태근느 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
const main = () => {
  const user = {
    name: "lee",
    isLogin: true,
  };
  // return <>{user.isLogin ? <diV>Logout</diV> : <div>Login</div>}</>;
  if (user.isLogin) {
    return <div className="logout">Logout</div>;
  } else {
    return <div>Login</div>;
  }
};

export default main;
