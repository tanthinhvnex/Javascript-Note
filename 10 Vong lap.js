// Trạng thái: còn phần đệ quy

// for: lặp với điều kiện đúng
// for/in: lặp qua key của đối tượng
// for/of: lặp qua value của đối tượng
// while: lặp với điều kiện đúng
// do/while: lặp ít nhất 1 lần, sau đó lặp với ĐK đúng

// for loop:
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// for/in loop: để lấy ra KEY của ĐỐI TƯỢNG
var myInfo = {
    name: "Son Dang",
    age: 18,
    address: "HN, VN",
};
// object có bao nhiêu key thì chạy bấy nhiêu lần
// key trả về string của key
for (var key in myInfo) {
    // cách để lấy key (kiểu string)
    console.log(key);
    // cách để truy cập vào giá trị (kiểu string)
    console.log(myInfo[key]);
}
// array vẫn là một object
var languages = ["Javascript", "PHP", "Ruby"];
for (var key in languages) {
    // key của mảng chính là index (kiểu string)
    console.log(key);
    console.log(languages[key]);
}
var myString = "Javascript";
for (var key in myString) {
    // key của String chính là index (kiểu string)
    console.log(key);
    console.log(myString[key]);
}
// for/of dùng để lấy VALUE của một mảng, string (không áp dụng được với object)
for (var value of languages) {
    console.log(value);
}
// để có thể dùng cho object, cần phải định dạng lại object
// Trả về một mảng các key
console.log(Object.keys(myInfo));
for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}
// trả về một mảng các value
console.log(Object.values(myInfo));
for (var value of Object.values(myInfo)) {
    console.log(value);
}

// while loop
var k = 0;
while (k < 1) {
    ++k;
}
// do..while loop
// chạy ít nhất một lần
var t = 0;
do {
    ++t;
} while (t < 4);

// break, continue hoạt động như c++
// set trong javascript
// set chỉ lưu mỗi value 1 lần
// set sắp xếp tăng dần, giảm dần tùy trường hợp
var array = [1, 2, 3, 1, 2, 3];
console.log(new Set(array));
