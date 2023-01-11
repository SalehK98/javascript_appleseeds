let worldPopulation = 7900;

const percentageOfWorld2 = (population) => {
  return ((population / worldPopulation) * 100).toFixed(1) + "%";
};

const arr = [48, 775, 523, 99];
const popu = (arr) => {
  const percentages = [];
  for (let i in arr) {
    percentages.push(percentageOfWorld2(arr[i]));
  }
  return percentages;
};

console.log(popu(arr));
