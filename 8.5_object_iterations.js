const myObj = {
  name: "saleh",
  lastName: "kalouti",
  age: 24,
};

const entries = Object.entries(myObj);
entries.map((ent) => ent.reverse());
const myObj2 = Object.fromEntries(entries);
// not in the right order, not an issue with objects
