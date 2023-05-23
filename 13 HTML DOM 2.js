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

// ////////// classList
// Lưu các class của một đối tượng
// Trả về 1 DOMTokenList
console.log(boxElement.classList);
// Trong HTML box_1 bị lặp lại tới 2 lần
// Devtools biết bị trùng nên chỉ tính là 1 class
console.log(boxElement.classList.length);
// có thể truy cập qua index
console.log(boxElement.classList[0]);
// Trả về một chuỗi trong class
// Là một chuỗi lấy ra sau dấu = của class=""
// vì vậy nếu có viết nhiều dấu cách thì sẽ lấy hết tất cả các dấu cách
// class="box box_1                box_1"
// vì classList.value sẽ là box box_1                box_1
console.log(boxElement.classList.value);
// Các phương thức phổ biến thường được sử dụng
// add: thêm class
// contains:
// remove:
// toggle: chuyển đổi (nếu có thì xóa, không thì thêm)
// cách để thêm một class tên red vào
boxElement.classList.add("red");
// để thêm một lúc nhiều class vào
boxElement.classList.add("blue", "green");
// Kiểm tra xem một class có tồn tại trong element không
console.log(boxElement.classList.contains("red"));
// xóa một class
// nếu xóa một class không tồn tại thì sẽ không bị lỗi
// Cách để thấy sự thay đổi
setTimeout(() => {
    boxElement.classList.remove("red");
}, 5000);
// toggle tương tự
