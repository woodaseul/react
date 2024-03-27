for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 아래 코드를 실행되지않고 다음 회차 진행
  }

  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
