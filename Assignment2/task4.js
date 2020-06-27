var markSubjA;
var markSubjB;
var markSubjC;
var totalMarks;
var totalMarksObtained;
var percentage;
var grade;
var remarks;
 
markSubjA = prompt("Enter Subject A marks obtained: ");
markSubjB = prompt("Enter Subject B marks obtained: ");
markSubjC = prompt("Enter Subject C marks obtained: ");
totalMarks = prompt("Enter Total marks of ALL 3 subjects: ");


totalMarksObtained = Number(markSubjA)+Number(markSubjB)+Number(markSubjC);
percentage = Math.floor(totalMarksObtained / totalMarks*100); 


if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if(percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if(percentage >= 60) {
    grade = "B";
    remarks = "You need to Improve";
} else {
    grade = "Failed";
    remarks = "Sorry";
}

document.write('<h1>'+ "Marks Sheet" + '</h1> </br> </br> <h4>' + "Total Marks: " + totalMarks + '</br>' + "Marks Obtained: " + totalMarksObtained + '</br>' + "Percentage: " + percentage + "%" + '</br>' + "Grade: " + grade + '</br>' + "Remarks: "+ remarks + '</h4> </br>' );