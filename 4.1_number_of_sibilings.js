var prompt = require("prompt");
prompt.start;

console.log("How many siblings do you have ?");
prompt.get(["number"], function (err, res) {
  let numSibling = parseInt(res.number); // strict operator
  //   let numSibling = res.number; // non-strict operator
  if (numSibling > 1) {
    console.log("more than one sibling");
  } else if (numSibling === 1) {
    console.log("one sibling");
  } else {
    console.log("no sibling");
  }
});
