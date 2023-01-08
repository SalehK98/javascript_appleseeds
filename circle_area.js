function Area(radius) {
  return Math.PI * radius;
}

console.log(Area(5));
console.log(Area(5).toFixed(2));
console.log(Math.round(Area(5) * 100) / 100);
console.log(Math.round((Area(5) + Number.EPSILON) * 100) / 100);

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
console.log(roundToTwo(Area(5)));
