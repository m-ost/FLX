let a = prompt("Enter a value of a:");
let b = prompt("Enter a value of b:");
let c = prompt("Enter a value of c:");
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Invalid input data");
} else {
  let d = Math.pow(b,2) - 4 * (a * c);
    if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / 2 * a;
      let x2 = (-b - Math.sqrt(d)) / 2 * a;
      alert("x1=" + x1 + " and x2=" + x2);
    } else if (d === 0) {
        let x = - b / (2 * a);
        alert("x=" + x);
    } else {
        alert("No solution");
    }
  }
