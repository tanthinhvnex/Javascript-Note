// Promise Example
var users = [
    { id: 1, name: "ABC" },
    { id: 2, name: "XYZ" },
    { id: 3, name: "MNP" },
];

var comments = [
    { id: 1, user_id: 1, content: "Chua co" },
    { id: 2, user_id: 2, content: "Da co" },
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// Từ user_id lấy ra user tương ứng

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

getComments().then(function (comments) {
    var userIds = comments.map(function (comment) {
        return comment.user_id;
    });
    console.log(userIds);
});
