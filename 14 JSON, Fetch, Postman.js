// JSON: là một ĐỊNH DẠNG (không phải kiểu dữ liệu) dữ liệu (chuỗi)
// JSON = JavaScript Object Notation
// Đây chỉ là một định dạng, nên các ngôn ngữ sẽ hỗ trợ JSON
// JSON: Number, String, Boolen, Null, Array, Object
// Có 2 thao tác: Mã hóa, giải mã (Encode, Decode) hoặc là Stringify/ Parse
// Stringify: từ JS Types sang JSON
// Parse: từ JSON sang JS Types

// Ngăn cách các phần tử trong JSON phải sử dụng ""
// Trong JSON không được thừa dấu , ở cuối
// Dạng số trong JSON thì không cần để vào ""
// Dạng Boolen trong JSON không cần để vào ""
// Key Object trong JSON phải được đặt trong ""

// '' là bắt buộc trong JSON
// thể hiện 1 là số nên không cần thêm ""
// tức là không cần phải viết a = '"1"'
var a = "1";
// Parse: JSON -> JS
console.log(JSON.parse(a));
// Stringify: JS -> JSON
console.log(
    JSON.stringify({
        name: "Thinh Lam",
        age: 18,
    })
);

// Sync / Async: Đồng bộ / Bất đồng bộ
// Đồng bộ: là viết trước chạy trước
// Các bất đồng bộ hay gặp: setTimeOut, setInterval, fetch
// XMLHttpRequest, file reading,
// request animation frame
