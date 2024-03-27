// 1. 배열생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

// 어떤 값이든 넣을 수 있음, 길이한계X
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);

arrC[0] = "hello";

console.log(arrC);
