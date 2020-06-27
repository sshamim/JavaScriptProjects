var secretNumber = 7;
var userValue;

userValue = prompt("Can you guess the Secret Number? \n Hint: its between 1 & 10" );

if (Number(userValue) == secretNumber) {
    document.write('<h4>' + "Bingo! Correct Answer.." + '</h4> </br>');
} else if (Number(userValue == secretNumber+1)) {
    document.write('<h4>' + "Close enough to the correct answer.." + '</h4> </br>');
} else {
    document.write('<h4>' + "You are totally Wrong!!... Try Again." + '</h4> </br>');
}