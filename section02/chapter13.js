// Promise 비동기 작업을 처리하는데 필요한 기능을 제공하는 객체
// API호출, 다른 서버와 통신할때 많이 쓰임
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    // executor
    // resole 성공, reject 실패
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

//const p = add10(0);
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
    // const newP = add10(result);
    //newP.then((result) => {
    //  console.log(result);} );
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드 : Promise 함수가 성공하면 실행됨
// catch 메서드 : Promise 함수가 실패하면 실행됨
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
