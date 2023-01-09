const gradeAssigner = (num) => {
  if (0 <= num <= 64) {
    console.log("F");
  } else if (65 <= num <= 69) {
    console.log("D");
  } else if (70 <= num <= 79) {
    console.log("C");
  } else if (80 <= num <= 89) {
    console.log("B");
  } else if (90 <= num <= 100) {
    console.log("A");
  } else {
    console.log("sth went wrong");
  }
};

const functionCaller = gradeAssigner(55);
