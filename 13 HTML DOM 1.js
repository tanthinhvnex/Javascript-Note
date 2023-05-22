// Trạng thái: hết 145, chưa 146, 147

// Tóm tắt:
// Các get element lấy trực tiếp element:
// + ById
// + querySelector
// các get element trả về HTML Collection
// + ByClassName
// + ByTagName
// + Một số thẻ thuộc HTML Collection: forms, images
// Các get element trả về NodeList
// + querySelectorAll

// ////////// Get Element Methods
// headingNode là một object
var headingNode = document.getElementById("heading");
// mặc dù headingNode là một object nhưng khi console
// thì hiển thị cả thẻ h1, này là do devtools thông minh
// nên devtools tự động chuyển dạng hiển thị từ object sang element cho dễ nhìn
console.log(headingNode);
// Muốn console ở hình dạng object
console.log({
    element: headingNode,
});
// Chuẩn W3S là 1 id duy nhất chỉ dùng cho một element
// Nên nếu viết không đúng chuẩn một 1 id dùng cho nhiều element
// Thì chỉ có element đầu tiên được chọn
// Nếu dùng vòng lặp thì các element phía sau cũng không được chọn mà return NULL
document.getElementById("lay mot id khong ton tai"); // return NULL

// không trả trực tiếp ra một object như getElementById
// mà trả thông qua một HTML Collection (KHÁ giống mảng)
// Nếu không có thì HTML Collection là rỗng
var headingNodes = document.getElementsByClassName("heading");
// Để có thể truy cập vào từng phần tử trong HTML Collection thì dùng vòng lặp
var headingTag = document.getElementsByTagName("h1");
// Cách lấy 1 phần tử trong HTML Collection giống như mảng
console.log(headingTag[0]);
// Có thể viết gọn như sau: lấy ra index 0 của HTML Collection thỏa điều kiện
var headingTag_short = document.getElementsByTagName("h1")[0];
// CSS Selector
// Trả về một element (không phải HTML Collection)
// Nếu có nhiều element thỏa điều kiện thì lấy element đầu tiên
var headingSelector = document.querySelector("h1");
// Nếu muốn lấy ra tất cả các element thỏa điều kiện ở dạng NodeList (khá giống mảng)
var headingSelectorAll = document.querySelectorAll("h1");
// Để lấy ra phần tử trong Nodelist thực hiện như mảng
console.log(headingSelectorAll[0]);
// Có thể viết gọn như sau:
var headingSelectorAll_short = document.querySelectorAll("h1")[0];
// Đối với form elements không cần phải get element như ở phía trên
// Trả về HTML Collection chứa tất cả các thẻ form trong document
console.log(document.forms);
// Có thể dùng index để lấy ra một form cụ thể
// Tuy nhiên việc dùng index không đem lại hiệu quả cao nếu như mà ta thêm xóa bớt form
// Nếu như có nhiều form quá thì cũng khó hình dung là form nào
console.log(document.forms[0]);
// Một cách tối ưu hơn
// Các form này được tạo ra có key mặc định trùng với id của form
console.log(document.forms.testForm);
console.log(document.forms["form-1"]);

// HTML Collection Anchors không được hỗ trợ trong HTML 5
// Mở comment dòng phía dưới sẽ thấy anchors bị gạch ngang
// console.log(document.anchors);
// Còn một số thẻ HTML Collection nữa -> Search Google
console.log(document.images);
// thay vì đứng từ document để get element con của nó
// Ta có thể đứng ở phạm vi thấp hơn
var boxNode = document.querySelector("h1");
console.log(boxNode);
// Sẽ đi tìm các Element là con của boxNode
console.log(boxNode.getElementsByClassName("h1"));

// Sử dụng document.write()
// Sẽ ghi lên document
// document.write không có nghĩa là ghi ở cuối ở tài liệu
// Mà nó được ghi khi nó được gọi
// Do đặt trong script nên nó thực thi cuối cùng
// Vì vậy nó mới nằm ở cuối
// trong file HTML có viết document.write
// Có thể thấy nó không nằm ở cuối
// Trong khi DOM đang được tải, thì document.write sẽ được thực thi
// ngay khi nó đọc được câu lệnh document.write
// Khi DOM đã được tải xong, dùng document.write thì sẽ xóa hết nội dung cũ
// document.write sẽ ghi đè nội dung lên
// Có thể test điều này trong devTools
document.write("Hello");

// DOM Attributes
// Khi thêm Attributes như này, f12 kiểm tra source code
// Sẽ không thấy h1 có title heading
// Vì source code chỉ hiển thị code của HTML
var headingElement = document.querySelector("h1");
headingElement.title = "Heading";
// Riêng để thêm class phải để là className
headingElement.className = "heading";
// Để gán một attribute không hợp lệ cho một element
headingElement.setAttribute("attributeName", "attributeValue");
// Cũng có thể dùng để gán một attribute hợp lệ
headingElement.setAttribute("class", "className");
// Để lấy ra một attribute hợp lệ trong element
console.log(headingElement.title);
// Nếu lấy một attribute KHÔNG HỢP LỆ trong element thì không thể dùng cách trên
// Để lấy ra một attribute hợp lệ hoặc không hợp lệ trong element
console.log(headingElement.getAttribute("attributeName"));

// ////////// innerText vs textContent Property
// innerText là một thuộc tính của element
// textContent vừa là thuộc tính của element vừa là của TextNode
console.log(headingElement.innerText);
console.log(headingElement.textContent);
// Có thể thay đổi textNode bằng cách tương tự
headingElement.innerText = "Thay doi noi dung";
console.log(headingElement.textContent);

var head = document.querySelector(".head");
// innerText hiển thị nội dung như trình duyệt hiển thị
console.log(head.innerText);
// textContent hiển thị nội dung là những gì có trong source code
// bỏ qua các tagName
console.log(head.textContent);
// trình duyệt sẽ không hiểu được đây là một thẻ
// chỉ xem là text thôi
// các <> sẽ được hiểu là HTML Entrities
// Để xem được entritie, nhấn phải chuột chọn Edit as HTML
head.innerText = "<i>Text</i>";
console.log(head.innerText);
// Khi kiểm tra trong element devtools
// Các dấu xuống dòng được thay bằng thẻ br (nhận biết được dấu xuống dòng)
// Trên cùng 1 dòng, có nhiều dấu cách thì được xem là một dấu cách
head.innerText = `

a
              New       Heading

`;
// Khi kiểm tra trong element devtools
// Các dấu xuống dòng được hiểu là các dấu cách
// Do được hiểu là các dấu cách nên HTML sẽ xem chỉ có 1 dấu
// Một dấu cách ở đầu và một dấu cách ở cuối
// Tóm lại textContent không nhận diện được dấu xuống dòng
// Mà chỉ xem là dấu cách
// Nên khi mở element để xem ta trông nó rất bình thường
// Để xem nội dung rõ ràng, cần phải nháy đúp chuột
// Mở comment để xem
// head.textContent = `

// a
//      New Heading            Content

// `;

// //////////// innerHTML
// Dùng để thêm textNode và element
// Thay vì <> sẽ chuyển thành HTML Entrities
// innerHTML hiểu được đây là các thẻ
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1 class='className'>Heading innerHTML</h1>";
// Mở comment để thấy nội dung được ghi đè
// boxElement.innerHTML = "Nội dung được thêm vào không có thẻ (text), ghi đè lên nội dung cũ";

// So với innerText, textContent sẽ lược bỏ đi các TagName
// innerHTML trả về nội dung gồm cả TagName ở dạng chuỗi
console.log(boxElement.innerHTML);

// outerHTML
// giống với innerHTML + lấy luôn cả nội dung của bản thân nó
// vì vậy khi set textNode bằng outerHTML nó sẽ ghi đè lên chính nó
// và nội dung con của nó luôn (innerHTML chỉ lấy nội dung con)
console.log(boxElement.outerHTML);
// Xem xét code phía dưới để thấy đối tượng không còn tồn tại thực sự
var outerHTMLElement = document.querySelector(".box_1");
outerHTMLElement.outerHTML = "<span> Thay đổi nội dung</span>";
// có thể thấy sau khi dùng outerHTML để thay đổi nội dung
// Thì box_1 đã không còn tồn tại
// tuy vậy nếu console .box_1 thì vẫn sẽ thấy xuất hiện
// này là do trong bộ nhớ còn lưu trữ
// nói chung là sau khi đã outerHTML cho một đối tượng
// thì không dùng lại đối tượng đó nữa
// cho dù nội dung outerHTML mới được thêm giữ nguyên các attribute
// chỉ thay đổi textNode, thì trình duyệt vẫn sẽ hủy đối tượng
// vừa thực thi outerHTML
console.log(outerHTMLElement.outerHTML);
