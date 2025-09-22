const userId = 101;
let userName = "ABC";
var userMail = "abc@gmail.com"; // not prefer use var 
userCity = "Mumbai";

// not allowed to redeclare the const variable
// userId = "100";

console.log(userId);

console.table([userId, userName, userMail,userCity]);


userName = "pqr";
userMail = "pqr@gmail.com";
userCity = "pune";

console.table([userId, userMail, userName, userCity]);