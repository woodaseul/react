// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려즈는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수 : 나머지 매개변수
// rest 매개변수 뒤에는 추가로 매개변수를 선언 할 수 없음
function funB(one, ...rest) {
  console.log(rest);
}

funB(...arr1);
