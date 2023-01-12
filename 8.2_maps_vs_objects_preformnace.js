console.time("object key, value assignment");
const myObj = {};
for (let i = 0; i < 100000; i++) {
  myObj[i] = i;
}
console.timeEnd("object key, value assignment");
// ---------------------------------------------------
console.time("map object key, value assignment");
const myMap = new Map();
for (let i = 0; i < 100000; i++) {
  myMap.set(i, i);
}
console.timeEnd("map object key, value assignment");

// finding from itself --------------------------------------------------------------------

console.time("finding from it self: object");
myObj[5985];
console.timeEnd("finding from it self: object");
// ---------------------------------------
console.time("finding from it self: map");
myMap.get(5985);
console.timeEnd("finding from it self: map");

// adding an entry--------------------------------------------------------------

console.time("adding an entry self: object");
myObj[1000000] = 1000000;
console.timeEnd("adding an entry self: object");
// -----------------------------------------
console.time("adding an entry self: map");
console.timeEnd("adding an entry self: map");
myMap.set(1000000, 1000000);

// deleting an entry -------------------------------------------------------------

console.time("deleting an entry: object");
delete myObj[1000000];
console.timeEnd("deleting an entry: object");
// -------------------------------------------
console.time("deleting an entry: map");
myMap.delete(1000000);
console.timeEnd("deleting an entry: map");
