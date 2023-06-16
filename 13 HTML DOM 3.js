// PreventDefault

// Muốn sử dụng document.anchors thì phải đặt
// name cho các thẻ a
// sử dụng link thì không cần đặt name
aElements = document.links;
// Khi nhấn vào thẻ a chứa link đền f8 thì web sẽ chuyển trang
// ngược lại không làm gì cả
console.log(aElements);
for (var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function (e) {
        if (!e.target.href.startsWith("https://fullstack.edu.vn/")) {
            e.preventDefault();
        }
    };
}

// Có tác dụng khi focus vào thì sẽ hiển thị gợi ý
// Khi nhấn vào các gợi ý thì sẽ không bị mất đi
var ulEle = document.querySelector("ul");
ulEle.onmousedown = function (e) {
    e.preventDefault();
};
ulEle.onclick = function (e) {
    console.log(e.target);
};

// stopPropagation: dùng để ngăn chặn sự nổi bọt
document.querySelector("div").onclick = function () {
    console.log("DIV");
};
document.querySelector("button").onclick = function (e) {
    e.stopPropagation();
    console.log("Click me");
};

// DOM LISTENER
// nhìn chung DOM Events và DOM Listener
// có chức năng như nhau
// tùy trường hợp mà sử dụng để được code tối ưu

// Chúng ta sẽ so sánh giữa DOM Listener vs DOM Events
// Làm một việc cùng một lúc
// Lắng nghe/ hủy bỏ lắng nghe

var btn = document.querySelector("button");
btn.onclick = function () {
    // Cong viec 1
    console.log("Viec 1");
    // Cong viec 2
    console.log("Viec 2");
    // Cong viec 3
    console.log("Viec 3");
};

// Muốn trong 3s đầu khi thao tác trên button
// thì việc X sẽ không được làm
// Sau 3s nếu có Events thì mới làm công việc X
setTimeout(function () {
    btn.onclick = function () {
        console.log("Cong viec X");
    };
}, 3000);

// Nếu lúc đầu có Events thì công việc Y sẽ thực hiện
// Nếu sau 3s mà có Events thì công việc Y sẽ không thực hiện
btn.onclick = function () {
    console.log("Cong viec Y");
};
setTimeout(function () {
    btn.onclick = function () {};
}, 3000);

// Sử dụng DOM Listener
var btnId = document.getElementById("btn");
// Khi dùng addEventListener tức là thêm vào
// nên các Events trước sẽ không bị mất đi
// sử dụng DOM Events thì các sự kiện trước bị mất đi do ghi đè
function viec1() {
    console.log("Click me AddEvenlistener");
}
function viec2() {
    console.log("Click me AddEvenlistener 2");
}
btnId.addEventListener("click", viec1);
btnId.addEventListener("click", viec2);
// Cách để xóa một Event Listener
btnId.removeEventListener("click", viec2);
