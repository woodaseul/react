import useInput from "../hooks/useInput";
// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문, 반복문..)로 호출될 수는 없다
// 3. 커스텀 훅을 직접 만들 수 있다.

const HookExam = () => {
  const [input, onchange] = useInput();

  return <input value={input} onChange={onchange} />;
};

export default HookExam;
