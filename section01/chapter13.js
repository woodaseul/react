// 1. 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
function main(value) {
  // console.log(value);
  console.log(1);
  console.log(2);
  value(); // 콜백함수는 메인함수가 언제든지 원하는 타이밍에 실행가능
  console.log("end");
}

function sub() {
  console.log("i am sub");
}

main(sub);

// 선언문처럼 사용도 가능
main(function sub() {
  console.log("i am sub");
});

// 화살표 함수
main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용 : 함수중복감소
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
