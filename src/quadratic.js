const readlineSync = require("readline-sync");

let xPoint = 0;
let yPoint = 0;

console.log("");
do {
    xPoint = readlineSync.question("Enter a positive number as an x-coordinate: ");
} while (xPoint < 0 || xPoint > Number.MAX_SAFE_INTEGER || Number.isNaN(xPoint));

yPoint = Math.pow(xPoint, 2);
console.log(`\nThe corresponding y-coordinate is ${yPoint.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}.`);