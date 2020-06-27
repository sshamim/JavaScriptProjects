
// Script #1
var a = 4;
var outputA;

if (++a === 5) {
alert("given condition for variable a is true ");
outputA = true;
} else {
    alert("given condition for variable a is false ");
    outputB = false;
}

document.write('<h4>'+"Output of a. is: " + outputA + '</h4>');

// Script #2
var b = 82;
var outputB;

if (b++ === 83){
alert("given condition for variable b is true ");
outputB = true;
} else {
    outputB = false;
    alert("given condition for variable b is false ");
}
document.write('<h4>'+"Output of b. is: " + outputB + '</h4>');


// Script #3
var c = 12;
var outputC1;
var outputC2;
var outputC3;
var outputC4;


if (c++ === 13){
    alert("condition 1 is true");
    outputC1 = true;
} else {
    alert("condition 1 is false");
    outputC1 = false;
}

document.write('<h4>'+"Output of Condition #1 is: " + outputC1 + '</h4>');


if (c === 13){
    alert("condition 2 is true");
    outputC2 = true;
} else {
    alert("condition 2 is false");
    outputC2 = false;
}

document.write('<h4>'+"Output of Condition #2 is: " + outputC2 + '</h4>');



if (++c < 14){
    alert("condition 3 is true");
    outputC3 = true;
} else {
    alert("condition 3 is false");
    outputC3 = false;
}

document.write('<h4>'+"Output of Condition #3 is: " + outputC3 + '</h4>');



if(c === 14){
    alert("condition 4 is true");
    outputC4 = true;
} else {
    alert("condition 4 is false");
    outputC4 = false;
}

document.write('<h4>'+"Output of Condition #4 is: " + outputC4 + '</h4>');


// Script #4
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
var outputD;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    outputD = true;
} else {
    alert("The cost is NOT equal");
    outputD = false;
}

document.write('<h4>'+"Output of d. is: " + outputD + '</h4>');


// Script #5
var outputE;

if (true){
    alert("True");
    outputE = true;
}
if (false){
    alert("False");
    outputE = false;
}

document.write('<h4>'+"Output of e. is: " + outputE + '</h4>');



// Script #6
var outputF;

if("car" < "cat"){
    alert("car is smaller than cat");
    outputF = true;
} else {
    alert("car is not smaller than cat");
    outputF = false;
}

document.write('<h4>'+"Output of f. is: " + outputF + '</h4> </br> </br>');