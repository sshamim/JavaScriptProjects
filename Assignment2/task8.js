var userValue;

userValue = prompt("Enter any number: ");

if (Number(userValue < 0)) {
    document.write('<h4>' + "You've entered Negative number " + '</h4> </br>');
} else if (userValue > 0) {
    document.write('<h4>' + "You've entered Positive number " + '</h4> </br>');
} else {
    document.write('<h4>' + "You've entered 0 " + '</h4> </br>');
}