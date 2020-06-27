var userValue;

userValue = prompt("Enter any number: ");

if (Number(userValue % 2 == 0)) {
    document.write('<h4>' + "You've entered EVEN number " + '</h4> </br>');
} else {
    document.write('<h4>' + "You've entered ODD number " + '</h4> </br>');
}