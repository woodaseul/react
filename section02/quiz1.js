const book1 = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  // publishedYear 속성은 이 객체에는 없습니다.
};

const book2 = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  publishedYear: 7,
};

// if ("publishedYear" in book1) {
//   console.log(`출판년도는 ${publishedYear}입니다.`);
// } else {
//   console.log("출판정보가 없습니다.");
// }

const check = (book) => {
  if (book.publishedYear) {
    console.log(`출판년도는 ${book.publishedYear}입니다.`);
  } else {
    console.log("출판정보가 없습니다.");
  }
};

check(book1);
check(book2);
