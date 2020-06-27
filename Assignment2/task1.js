var cityname = prompt("Enter your favorite city :");

if (cityname === "Karachi" || cityname === "KARACHI" || cityname === "karachi") {
    document.write('<h4>' + "Welcome to city of lights aka " + cityname + '</h4> </br> </br>');
} else {
    document.write('<h4>'+ "I strongly suggest you to visit KARACHI aka city of lights" + '</h4> </br> </br>');
}