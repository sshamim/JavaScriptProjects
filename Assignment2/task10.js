var pwd = "123";
var userPwd;

userPwd = prompt("Enter your password..");

if (userPwd == null || userPwd == '' || userPwd == undefined) {
    document.write('<h4>' + "Please enter password" + '</h4>');
} else if (userPwd === pwd) {
    document.write('<h4>' + "Correct! The password you entered matches the original password" + '</h4> </br>');
} else if (userPwd !== pwd) {
    document.write('<h4>' + "Incorrect password ... Try again " + '</h4> </br>');
}