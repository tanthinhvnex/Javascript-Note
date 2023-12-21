// Write a JavaScript program to find out
//  if 1st January will be a Sunday between 2014 and 2050.

let date = new Date("2014-01-01");
for (let i = 2014; i <= 2050; i++) {
    console.log(date.getDay() === 0 ? "Yes" : "No");
    date.setFullYear(i + 1);
}
