let worldPopulation = 7900;

function percentageOfWorld1(population) {
  return ((population / worldPopulation) * 100).toFixed(1) + "%";
}

const percentageOfWorld2 = (population) => {
  return ((population / worldPopulation) * 100).toFixed(1) + "%";
};

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(1441));
