// Quiz1
function printMovieReview({ title, releaseYear, reviewers }) {
  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  console.log(`첫 번째 리뷰어 : ${reviewers[0] || "리뷰어 미정"}`);
}

printMovieReview({
  title: "오펜하이머",
  releaseYear: 2023,
  reviewers: ["이정환", "김효빈", "김고은"],
});

printMovieReview({
  title: "웡카",
  releaseYear: 2024,
  reviewers: [],
});

// Quiz2
function printAvgScore(students) {
  for (const key in students) {
    const scores = students[key].scores;
    let sum = 0;
    for (let score of scores) {
      sum += score;
    }
    console.log(`${key} : ${sum / scores.length}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
