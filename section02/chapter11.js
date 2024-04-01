// 동기와 비동기
console.log(1);

// Web APIs라는 브라우저가 직접 관리하는 영역에서 실행
// 타이머가 끝나면 다시 js엔진으에 돌려줌
// 쓰레드가 1밖에 없어도 동시에 작업 가능한 이유!
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
