// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
let a = 5;
let b = 6;
let c = 7;
let p = (a + b + c) / 2;
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
s = s.toFixed(2);
console.log(typeof s);
