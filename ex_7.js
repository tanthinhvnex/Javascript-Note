// Write a JavaScript program where the program takes a random integer
//  between 1 and 10, and the user is then prompted to input a guess number.
//  The program displays a message "Good Work"
//  if the input matches the guess number otherwise "Not matched".

// Returns a random integer from 1 to 10:
let num = Math.floor(Math.random() * 10) + 1;
let gnum = prompt("Guess the number between 1 and 10 inclusive: ");
if (num == gnum) {
    alert("Good Work");
} else {
    alert(`Not matched: expect number is ${num}`);
}
