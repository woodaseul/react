// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);

// 3. indexOf : 원시타입을 찾을때 사용
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(20);
console.log(index);
console.log(index2); // 존재하지 않아서 -1 반환

let objectArr = [{ name: "이정환" }, { name: "우다슬" }];

console.log(objectArr.indexOf({ name: "이정환" }));
console.log(objectArr.findIndex((item) => item.name === "이정환"));

// 4. findIndex : 객체 타입 찾을때 사용
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//   if (item === 2) return true;
// });

const findedIndex = arr4.findIndex((item) => item === 999);

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이정환" }, { name: "우다슬" }];

const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
