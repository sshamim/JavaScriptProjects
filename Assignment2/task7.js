var firstNumber;
var secondNumber;
var operator;
var result;

firstNumber = prompt("Enter First Number ");
secondNumber = prompt("Enter Second Number ");
operator = prompt("Enter Operation (+, -, *, / or %) ");



if (operator == '+') {
    result = Number(firstNumber) + Number(secondNumber);
} else if (operator == '-') {
        result = Number(firstNumber) - Number(secondNumber);
} else if (operator == '*') {
    result = Number(firstNumber) * Number(secondNumber);
} else if (operator == '/') {
    result = Number(firstNumber) / Number(secondNumber);
} else if (operator == '%') {
    result = Number(firstNumber) % Number(secondNumber);
} else {
    result = null;
}

if (result != null) {
document.write('<h4>' + "If we '" + '<b>' + operator + "' " + '</b>' + firstNumber + " and " + secondNumber + " the result will be " + result + '</h4> </br>' );
} else {
    document.write('<h4>' + "You've mentioned incorrect Operator... Please enter valid value " + '</h4> </br>');
}