function validator1(pass = "") {
  if (pass.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

const validator = (pass = "") => (pass.length > 7 ? "Strong" : "Weak");

const advanced = (pass = "") =>
  pass.length > 7 && !(pass.toLowerCase() === pass)
    ? "Very Strong"
    : validator(pass);

console.log(advanced("SAlejhffff"));
