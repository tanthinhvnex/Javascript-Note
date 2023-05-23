// tiếp tục 148 (chưa 146, 147)

// CSS DOM
// CSS Style
var boxElement = document.querySelector(".box");
boxElement.style.width = "100px";
boxElement.style.height = "100px";
// nếu viết trong css thì dùng dấu '-'
// trong js thì dùng camelCase
boxElement.style.backgroundColor = "red";
// có thể gom lại ghi 1 dòng
Object.assign(boxElement.style, {
    width: "200px",
    height: "200px",
    backgroundColor: "yellow",
});
// cách để lấy ra 1 giá trị của thuộc tính CSS Inline
// chỉ lấy được giá trị CSS Inline
// nếu là External hoặc Internal đều không lấy được nhé
console.log(boxElement.style);
