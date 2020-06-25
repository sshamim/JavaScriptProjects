var tempCelcius = 25;
var tempFarenheit = 70;

var tempFToC = (tempFarenheit - 32) * 5 / 9;
var tempCToF = (tempCelcius * 9 / 5) + 32 ;

document.write(tempCelcius + '&deg' + "C is " + tempCToF + '&deg' + " F" + '</br>');
document.write(tempFarenheit  + '&deg' + "F is " + tempFToC  + '&deg' + " C"  + '</br>');