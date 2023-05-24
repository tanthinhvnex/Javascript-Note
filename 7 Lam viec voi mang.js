// trạng thái: hoàn thành

var languages = ["Javascript", "PHP", "Ruby"];
console.log(languages);

// Một cách tạo mảng khác
var arr_tmp = new Array("Javascript", "PHP", "Ruby", null, undefined, function () {}, {});

// Array là một object
console.log(typeof languages);
console.log(typeof []);
console.log(typeof {});

// Để xác định cụ thể có phải là một array hay không
// Trả về true -> là array
// Trả về false -> không là array
console.log(Array.isArray(languages));
console.log(Array.isArray([]));

// Độ dài của mảng
console.log(languages.length);

// Lấy phần tử theo index (key)
console.log(languages[0]);

// Một số thuộc tính, phương thức phổ biến của Array
// Search: Javascript Array Method

// toString()
// Giữa các phần tử được ngăn cách với nhau bằng dấu ','
// Không thể thay đổi dấu ',' này bằng 1 dấu khác
console.log(languages.toString());
console.log(typeof languages.toString());
// join
// Hoạt động giống toString nhưng có thể tùy chỉnh dấu ngăn cách
// giữa các phần tử với nhau
// nếu không để gì thêm thì giống toString
console.log(languages.join());
// là một chuỗi rỗng, giữa các phần tử không có sự ngăn cách
console.log(languages.join(""));
// ngăn cách bằng dấu ' - '
console.log(languages.join(" - "));

// pop: xóa phần tử ở cuối array, và trả về phần tử cuối này
// nếu mảng rỗng mà vẫn muốn xóa
// thì sẽ trả về undefined, lúc này mảng vẫn là mảng rỗng
console.log(languages.pop());
// push: thêm một phần tử vào cuối mảng, trả về độ dài mảng sau khi được thêm
console.log(languages.push("Dart"));
// Có thể thêm một lúc nhiều phần tử
console.log(languages.push("C++", "C"));
console.log(languages);
// Shift: xóa đi phần tử ở đầu mảng, trả về phần tử đã xóa
// nếu mảng rỗng mà vẫn xóa, thì trả về undefined
// mảng rỗng thì vẫn rỗng
console.log(languages.shift());
// unshift: thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới
console.log(languages.unshift("Javascript", "Java"));
// Splicing:
// Có thể dùng để xóa phần tử
// đặt con trỏ ở ngay index 1, từ đây xóa 2 phần tử của languages
console.log(languages);
languages.splice(1, 2);
console.log(languages);
// cách để thêm một phần tử
// đặt con trỏ ở index 1, 0 xóa phần tử nào từ vị trí này cả
// chèn "Python" vào
languages.splice(1, 0, "Python");
console.log(languages);
// concat: dùng để nối 2 mảng thành 1 mảng, trả về mảng mới đã ghép 2 mảng
console.log(languages.concat(arr_tmp));
// khác với
console.log(arr_tmp.concat(languages));
// slicing: dùng để cắt mảng
// cắt từ index 1 đến hết
console.log(languages.slice(1));
// cắt từ [1, 3), lưu ý là [)
console.log(languages.slice(1, 3));
// có thể là số âm để tính từ cuối mảng
console.log(languages.slice(-2, -1));
console.log(languages.slice(-2));
