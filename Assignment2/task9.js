var userValue;
var vowel;

userValue = prompt("Enter an alphabet: ");


if (userValue == 'a' || userValue == 'e' || userValue == 'i' || userValue == 'o' || userValue == 'u') {
    vowel = true;
} else {
    vowel = false; 
}

document.write('<h4>' + "User had entered vowel?: " + vowel + '</h4> </br>');