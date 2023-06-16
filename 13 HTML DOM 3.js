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
