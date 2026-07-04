const accountId=1234656
let accountEmail="shubhamchaurdharyrmp102001@gmail.com"
var password="Shubham@1234"
accountCity="Gurugram"  // 
let accountState;

/*
Prefer not to use becasue of issue in block scope and functional scope
*/

//accountId=2  not allowed

accountEmail="test@gmail.com"
password="9884"
accountCity="Delhi"
console.table([accountEmail,password,accountId,accountCity,accountState])
