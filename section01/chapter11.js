// 함수선언
function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); // 함수호출
console.log("호출 후");

let area1 = getArea(10, 20); //인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 호이스팅 -> 끌어올리다 즉, 호출문이 함수선언문보다 위에 있어도 상관없음
// (매개변수)
function getArea(width, height) {
  // 중첩함수
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  //console.log(area);
  return area; //반환값
}
