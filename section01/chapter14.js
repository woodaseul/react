// 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; //지역 스코프 : 블록 외부에서 부르면 오류발생
  console.log(a);
  //function funcB() {}
}

funcA();

if (true) {
  let c = 1;
}

//funcB();
// 함수선언식은 함수 블록 안에서만 지역 스코프를 갖음
