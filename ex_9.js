// Write a JavaScript program to calculate the days left before Christmas.

function multiply() {
    let number_1 = document.getElementById("number_1").value;
    let number_2 = document.getElementById("number_2").value;
    document.getElementById("result").innerHTML = parseFloat(number_1) * parseFloat(number_2);
}

function devide() {
    let number_1 = document.getElementById("number_1").value;
    let number_2 = document.getElementById("number_2").value;
    console.log(typeof number_1);
    document.getElementById("result").innerHTML = parseFloat(number_1) / parseFloat(number_2);
}
