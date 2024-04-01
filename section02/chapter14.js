// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// 아래 객체를 그대로 반환하는 함수가 아니라 이 객체를 결과 값으로 갖는 새로운 프라미스를 반환하는 함수로 변환
async function getData() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능
// 비동기 함수가 다 처리되기를 기달리는 역할
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
