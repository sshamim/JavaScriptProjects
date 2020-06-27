var time;

time = prompt("Please enter time  \n (24 hours format)");

if (time >= 0000 && time < 1200) {
    document.write('<h4>' + "Good Morning!! " + '</h4> </br>');
} else if (time >= 1200 && time < 1700) {
    document.write('<h4>' + "Good Afternoon!! " + '</h4> </br>');
} else if (time >= 1700 && time < 2100) {
    document.write('<h4>' + "Good Evening!! " + '</h4> </br>');
} else if (time >= 2100 && time < 2359) {
    document.write('<h4>' + "Good Night!! " + '</h4> </br>');
} else {
    document.write('<h4>' + "You must have entered incorrect time " + '</h4> </br>');
}