// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; 새로운 값을 할당하는 건 문제

// 저장된 객체 값이 바뀌는 건 문제 없음
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티
const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
