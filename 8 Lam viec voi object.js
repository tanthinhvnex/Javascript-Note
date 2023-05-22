// Trạng thái: Hoàn thành

var emailKey = "email";

var myInfo = {
    // key : value,
    name: "Tan Thinh",
    age: 18,
    address: "Ha Noi, VN",
    // Khi muốn đặt key vi phạm vi tắc đặt tên biến
    "full-name": "Lam Tan Thinh",
    [emailKey]: "tanthinhvnex@gmail.com", // Tương đương email: "tanthinhvnexc@gmail.com"
    getName: function () {
        return this.name;
    },
};

var myKey = "address";

// Thêm cặp key-value ở bên ngoài object
myInfo.email = "tanthinhvnex@gmail.com";
// Khi đặt key sai quy tắc đặt tên
myInfo["my-email"] = "tanthinhvnex@gmail.com";
myInfo[myKey] = "Ha Noi, VN"; // Tương đương myInfo.address

// Cách để lấy toàn bộ object
console.log(myInfo);

// Cách để lấy key-value - Giống như cách để thiết lập key-value cho object
console.log(myInfo.name);
console.log(myInfo["my-email"]);
console.log(myInfo[myKey]); // Tương đương myInfo.address
// Cách để XEM NỘI DUNG một function
console.log(myInfo.getName);
// Cách để THỰC THI một function
console.log(myInfo.getName());

// Cách để xóa một cách key-value
// Nhìn chung là dùng cú pháp lấy ra key sau đó thêm từ khóa delete phía trước
delete myInfo.age;

// //////////////////// Object Constructor
// Khi đặt tên cho object constructor nên viết ký tự đầu tiên IN HOA

// Đây không phải là đối tượng, đây chỉ là mô tả thiết kế của đối tượng
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Xây dựng các đối tượng author, user có chung các thuộc tính
// firstName, lastName, avatar
// Các author, user chính là các đối tượng
var author = new User("Thinh", "Lam", "avatar");
var user = new User("Abc", "Xyz", "Avatar");
// Cách để XEM NỘI DUNG constructor
console.log(author.constructor);
// Để xây dựng một số thuộc tính riêng
author.title = "Chia sẻ dạo tại F8";
user.comment = "Khi nào thì ra video vậy";

// //////////////////// Object Prototype
// Sử dụng lại User constructor ở phía trên
// Object Protoype dùng để thêm thuộc tính hoặc phương thức
// Của đối tượng nằm ở phía bên ngoài của constructor
// Hàm khởi tạo định nghĩa đối tượng trong lúc tạo ra đối tượng
// Prototype là bổ sung các attribute or property vào đối tượng sau khi đã được khởi tạo
console.log(author);
User.prototype.className = "F8";
// Việc console.log(author) trước hay sau khi có prototype thì đều sẽ có thuộc tính className
// Khi xem trong console bằng cách nhấn vào phím mũi tên
// Ta chỉ có thể thấy các attribute hoặc property được định nghĩa trong hàm khởi tạo
// Để có thể xem được do prototype thêm vào cần nhấn vào proto nữa
console.log(author);

// //////////////////// Date Object
// Đối tượng Date là một đối tượng có sẵn trong Javascript
// Cách này tạo ra date kiểu object
var date = new Date();
// Cách này tạo ra date kiểu string
var date_1 = Date();
// Mặc dù date là một đối tượng
// Khi gọi date trực tiếp sẽ in ra chuỗi string
// thay vì phải dùng toString()
console.log(date);
// Các đối khác phải là
console.log(date.toString());
// Date có nhiều phương thức, có thể lên mạng để tra thêm
// Search: javascript date object mozilla
// Sau đây là một số phương thức
var year = date.getFullYear();
var month = date.getMonth(); // Lưu ý giá trị này từ 0 -> 11
var day = date.getDate();

// //////////////////// Math Object
// Lưu ý Math không phải là một constructor
// Nên không thể new Math()
// Một số thuộc tính, phương thức quen thuộc
Math.PI;
Math.round();
Math.abs();
Math.ceil();
Math.floor();
Math.random(); // Trả về một số thập phân nhỏ hơn 1
Math.min(-100, 0, 40);
Math.max(132, 4234, 22);

// Ứng dụng của Math Object
// Khi cường hóa đồ thì có tỉ lệ thất bại cao hơn là thành công
// Tạo ra các số từ 0 - 99
var random = Math.floor(Math.random() * 100);
// Cho điều kiện dưới 10 thì cường hóa thành công
if (random < 10) {
    console.log("Cường hóa thành công");
}
