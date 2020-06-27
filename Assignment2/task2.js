var trafficSignalColor = prompt("Enter Signal Color: ");

if (trafficSignalColor === "Red" || trafficSignalColor === "RED" || trafficSignalColor === "red"){
    document.write('<h4>'+"You MUST stop the car!" + '</h4> </br> </br>');
} else if (trafficSignalColor === "Yellow"  || trafficSignalColor === "YELLOW" || trafficSignalColor === "yellow" ){
    document.write('<h4>'+"Ready to move your car "+ '</h4> </br> </br>');
} else if (trafficSignalColor === "Green"  || trafficSignalColor === "GREEN" || trafficSignalColor === "green" ){
    document.write('<h4>'+"Move your car now "+ '</h4> </br> </br>');
} else {
    document.write('<h4>'+"You have entered incorrect traffic signal color !! "+ '</h4> </br> </br>');
}