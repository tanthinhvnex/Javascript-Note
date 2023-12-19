// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
console.log("Today is : " + day + ".");
let hour = d.getHours();
if (hour >= 12) {
    hour = hour - 12 + " PM";
} else {
    hour += " AM";
}
hour += " : " + d.getMinutes() + " : " + d.getSeconds();

console.log("Current time is : " + hour);
