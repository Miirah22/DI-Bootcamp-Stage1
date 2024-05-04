/*Instructions
Ask the user for their grade.

If the grade is bigger than 90, console.log “A”

If the grade is between 80 and 90 (included), console.log “B”
If the grade is between 70(included) and 80 (included), console.log “C”
If the grade is lower than 70, console.log “D”*/

// Ask the user for their grade
//var userGrade = prompt("Enter your grade:");

// Convert the user input to a numeric value
var userGrade = markings;
var numericGrade = userGrade;

// Check the grade and display the corresponding letter grade
if (numericGrade > 90) {
    console.log("A");
} else if (numericGrade >= 80 && numericGrade <= 90) {
    console.log("B");
} else if (numericGrade >= 70 && numericGrade < 80) {
    console.log("C");
} else {
    console.log("D");
}








