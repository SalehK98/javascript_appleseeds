// const myDate = new Date();
// let mySec = myDate.getSeconds();

let x = 1;
const loop = () => {
  const heading = (document.getElementById("heading").innerText = x);
};

var mainLoop = setInterval(function () {
  loop();
  x++;
  console.log(x);
}, 1000);

// clearInterval(mainLoopId);
