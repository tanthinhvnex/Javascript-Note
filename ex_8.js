// Write a JavaScript program to calculate the days left before Christmas.
let date = new Date();
let date_christmas = new Date("2023 12 24");
console.log(Math.floor((date_christmas - date) / 1000 / 60 / 60 / 24));
