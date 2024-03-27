// 1. 함수표현식
//함수 선언
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수를 변수에 담음
console.log(varA); // 함수식 자체가 호출됨
varA(); // 값이 호출됨

//함수표현식 : 호이스팅이 안됨!
let varB = function () {
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

console.log(varC());

// 리턴값만 있는거면 더 간결하게 표현가능
let varD = (value) => value + 1;
console.log(varD(10));
