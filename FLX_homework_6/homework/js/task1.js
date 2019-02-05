var a = prompt("Enter a value of a:");
var b = prompt("Enter a value of b:");
var c = prompt("Enter a value of c:");
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Invalid input data");
} else {
    var d = b * b - 4 * a * c;
    if (d > 0) {
        var x1 = (-b + Math.sqrt(d)) / 2 * a;
        var x2 = (-b - Math.sqrt(d)) / 2 * a;
        alert("x1=" + x1 + " and x2=" + x2);
    } else if (d === 0) {
        var x = -b / 2 * a;
        alert("x=" + x);
    } else {
        alert("No solution");
    }
}
