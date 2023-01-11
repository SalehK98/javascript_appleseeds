const people = ["Greg", "Mary", "Devon", "James"];
const people2 = ["Greg", "Mary", "Devon", "James"];

const loo = (arr, arr3) => {
  for (let i in arr) console.log(arr[i]);
  arr.splice(0, 1);
  arr.pop();
  arr.splice(0, 0, "Matt");
  arr.push("saleh");
  console.log("-----");
  for (let i in arr) {
    if (arr[i] !== "Mary") {
      console.log(arr[i]);
    }
    break;
  }
  const arr2 = arr.slice(2, 4);
  console.log(arr.findIndex((el) => el === "Mary"));
  console.log(arr.findIndex((el) => el === "foo"));
  console.log(arr);
  console.log(arr3);
  arr3.splice(2, 1, "Elizabeth");
  arr3.splice(3, 0, "Artie");
  console.log(arr3);

  const withBob = arr3.concat("bob");

  console.log(withBob);
};

const x = loo(people, people2);
