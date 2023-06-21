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
// Để xử lý các bất đồng bộ phía trước: dùng callback

// Sử dụng callback gây ra 1 nỗi đau (pain) gọi là
// Callback Hell + Pyramid of doom

// Ví dụ về Pain
// Việc bên trong phụ thuộc vào việc bên ngoài (Callback Hell)
// Để làm được việc 2 thì cần phải xong việc 1
// Việc trong bị phụ thuộc vào việc ngoài
setTimeout(function () {
    console.log(1); // Viec 1
    setTimeout(function () {
        console.log(2); // Viec 2
        setTimeout(function () {
            console.log(3); // Viec 3
            setTimeout(function () {
                console.log(4); // Viec 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// 3 Trạng thái của Promise
// 1. Pendding: chờ
// 2. Fulfilled: thành công
// 3. Rejected: thất bại

// Promise dùng để xử lý vấn đề bất đồng bộ
// Trước khi có Promise thì dùng callback
// Nhưng dùng callback thì bị callback hell
var promise = new Promise(
    // Executor
    // Hàm này sẽ được thực thi ngay thi gọi new Promise
    // thậm chí hàm này còn được thực thi trước khi biến promise nhận được Promise
    function (resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        // Nếu không gọi resolve, reject thì ở trạng thái pendding
        // nếu gọi resolve() thì then thực hiện sau đó finally() thực hiện
        // nếu gọi reject() thì catch thực hiện sau đó finally() thực hiện
        resolve();
    }
);

promise
    .then(function () {
        console.log("Successfully");
        return 1;
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {
        console.log("Failure");
    })
    .finally(function () {
        console.log("Done");
    });

// Tiếp tục về lý thuyết, cách hoạt động của Promise
// có tính chất chuỗi, tức là 1 Promise có thể có
// nhiều then, nhiều catch, nhiều finally
// trả về của then trước, có thể được xem là tham số
// đầu vào cho then sau
// nếu không return hoặc return không phải là một Promise
// thì then sau sẽ được thực thi ngay
// nếu return Promise, thì chỉ khi Promise được thực thi xong
// thì then sau mới được chạy
