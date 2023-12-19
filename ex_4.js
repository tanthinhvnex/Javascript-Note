// Write a JavaScript program to rotate
//  the string 'w3resource' in the right direction.
//  This is done by periodically removing one letter
//  from the string end and attaching it to the front.

function animate_string(id) {
    let element = document.getElementById(id);
    let str = element.innerHTML;
    let ori_str = str;
    let length = str.length;
    setInterval(function () {
        if (ori_str == str) {
            str = " " + str;
        } else {
            str = str[length - 1] + str;
        }
        str = str.slice(0, length);
        element.innerHTML = str;
    }, 1000);
}
