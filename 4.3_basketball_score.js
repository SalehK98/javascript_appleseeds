const averageScore = (score1, score2, score3) => {
  return (average = (score1 + score2 + score3) / 3);
};

if (averageScore(116, 120, 103) > averageScore(116, 123, 94)) {
  if (averageScore(116, 120, 103) > averageScore(134, 97, 105)) {
    console.log(
      `mike's team wins with average of ${averageScore(116, 120, 103)}`
    );
  } else {
    console.log(
      `mary's team wins with average of ${averageScore(134, 97, 105)}`
    );
  }
} else {
  if (averageScore(116, 123, 94) > averageScore(134, 97, 105)) {
    console.log(
      `john's team wins with average of ${averageScore(116, 123, 94)}`
    );
  } else {
    console.log(
      `mary's team wins with average of ${averageScore(134, 97, 105)}`
    );
  }
}
