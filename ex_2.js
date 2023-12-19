//  Write a JavaScript program to get the current date.
// Expected Output : dd mm yyyy

const today = new Date();
let year = today.getFullYear();
let day = today.getDate().toString();
day = day.padStart(2, "0");
let month = (today.getMonth() + 1).toString();
month = month.padStart(2, "0");
console.log(`${day} ${month} ${year}`);
