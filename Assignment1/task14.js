var a = 2; 
var b = 1; 
var result = --a - --b + ++b + b--;

document.write ("a is " + a + '</br>');
document.write ("b is " + b + '</br>');
document.write ("result is " + result + '</br> </br>');


document.write("Working:" + '</br>');

a = 2;
result = --a;
document.write ("--a is: " + result + '</br>');

a = 2;
b = 1;
result = --a - --b
document.write ("--a - --b is: " + result + '</br>');

a = 2;
b = 1;
result = --a - --b + ++b
document.write ("--a - --b + ++b is: " + result + '</br>');

a = 2; 
b = 1; 
result = --a - --b + ++b + b--;
document.write ("--a - --b + ++b + b-- is: " + result + '</br>');